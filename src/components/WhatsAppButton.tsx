import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={26} className="text-background" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
