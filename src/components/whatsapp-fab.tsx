import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "20693600000";
const WHATSAPP_DEFAULT_MSG = encodeURIComponent(
  "Hello! I'm interested in booking at Park Regency Sharm El Sheikh. Could you help me?",
);

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`;

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded quick-contact panel */}
      {open && (
        <div className="bg-card border border-border shadow-luxury rounded-sm w-64 overflow-hidden animate-[fadeInUp_0.25s_ease]">
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-white" />
            <div>
              <p className="text-white text-xs font-semibold">Park Regency</p>
              <p className="text-white/70 text-[10px]">Typically replies within minutes</p>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba5a] transition-colors rounded-sm"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+20693600000"
              className="flex items-center gap-3 w-full px-4 py-3 bg-ocean-deep text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold hover:text-ocean-deep transition-colors rounded-sm"
            >
              <Phone className="h-4 w-4 shrink-0" />
              Call Reservations
            </a>
            <a
              href="mailto:reservations@parkregency.com"
              className="flex items-center gap-3 w-full px-4 py-3 border border-border text-xs font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors rounded-sm"
            >
              <Mail className="h-4 w-4 shrink-0" />
              Send Email
            </a>
          </div>
        </div>
      )}

      {/* Main FAB button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact us"
        className="relative h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:bg-[#20ba5a] hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
      >
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        )}
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
