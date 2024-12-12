import { Facebook1 } from "@/icons/Facebook1";
import { IconWhatsapp } from "@/icons/IconWhatsapp";
import { Instagram1 } from "@/icons/Instagram1";
import { Linkedin1 } from "@/icons/Linkedin1";

const appNavigation = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Imóveis",
        path: "/imoveis"
    },
    {
        title: "Consultoria",
        path: "/consultoria"
    },
    {
        title: "E-commerce",
        path: "/ecommerce"
    },
    {
        title: "E-books",
        path: "/ebooks"
    },
    {
        title: "Contato",
        path: "/contato"
    }
];

const appSocialMedias = [
    {
        title: "Whatsapp",
        href: "https://wa.me/557191720457?text=Ol%C3%A1%20linaldo%2C%20%20Acessei%20o%20site%20da%20Ex%20Enterprise%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20contratar%20os%20servi%C3%A7os",
        icon: <IconWhatsapp className="text-inherit fill-current size-full" />
    },
    {
        title: "Facebook",
        href: "#",
        icon: <Facebook1 className="text-inherit fill-current size-full" />
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/exenterprise/",
        icon: <Instagram1 className="text-inherit fill-current size-full" />
    },
    {
        title: "Linkedin",
        href: "#",
        icon: <Linkedin1 className="text-inherit fill-current size-full" />
    }
];   

export { appNavigation, appSocialMedias };
