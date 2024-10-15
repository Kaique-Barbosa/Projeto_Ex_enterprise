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
    }
];

const appSocialMedias = [
    {
        title: "Whatsapp",
        href: "#",
        icon: <IconWhatsapp className="text-inherit fill-current size-full" />
    },
    {
        title: "Facebook",
        href: "#",
        icon: <Facebook1 className="text-inherit fill-current size-full" />
    },
    {
        title: "Instagram",
        href: "#",
        icon: <Instagram1 className="text-inherit fill-current size-full" />
    },
    {
        title: "Linkedin",
        href: "#",
        icon: <Linkedin1 className="text-inherit fill-current size-full" />
    }
];   

export { appNavigation, appSocialMedias };
