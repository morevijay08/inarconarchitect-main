import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { z } from "zod";
import { toast } from "sonner";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  contact: z.string().trim().regex(/^[+\d\s\-()]{7,20}$/, "Enter a valid contact number"),
  address: z.string().trim().min(5, "Please enter your address").max(300),
});

const STORAGE_KEY = "inarcon_enquiry_shown";
const DELAY_MS = 3.5 * 60 * 1000; // 3.5 minutes

const EnquiryPopup = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Thank you! We'll reach out to you shortly.");
    setForm({ name: "", contact: "", address: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-background border-2 border-accent/30">
        <DialogHeader>
          <p className="text-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-accent font-bold mb-2">
            Free Consultation
          </p>
          <DialogTitle className="text-display text-2xl sm:text-3xl leading-tight">
            Let's Bring Your Vision to Life
          </DialogTitle>
          <DialogDescription className="text-body text-sm text-muted-foreground pt-2">
            Share your details and our team will get in touch with you for a personalised consultation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div>
            <label className="text-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block font-bold">
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full px-4 py-3 bg-card border-2 border-border text-body text-sm focus:outline-none focus:border-accent transition-colors"
            />
            {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
          </div>

          <div>
            <label className="text-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block font-bold">
              Contact Number
            </label>
            <input
              type="tel"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              maxLength={20}
              className="w-full px-4 py-3 bg-card border-2 border-border text-body text-sm focus:outline-none focus:border-accent transition-colors"
            />
            {errors.contact && <p className="text-xs text-destructive mt-1.5">{errors.contact}</p>}
          </div>

          <div>
            <label className="text-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block font-bold">
              Address
            </label>
            <textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              maxLength={300}
              rows={3}
              className="w-full px-4 py-3 bg-card border-2 border-border text-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
            />
            {errors.address && <p className="text-xs text-destructive mt-1.5">{errors.address}</p>}
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-accent text-accent-foreground text-mono text-[11px] tracking-[0.2em] uppercase hover:bg-accent/90 transition-all font-bold shadow-lg"
          >
            Submit Enquiry
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryPopup;
