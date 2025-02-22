"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
  button?: {
    text: string;
    href: string;
  };
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: {
    name: string;
    description: string;
  };
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
    ({ className, brand, socialLinks, columns, copyright, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn("pt-24 bg-[#030303]", className)}
          {...props}
        >
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <a href="#" className="text-xl font-semibold text-white">
                  {brand.name}
                </a>
                <p className="text-sm text-white/60">
                  {brand.description}
                </p>
  
                <p className="text-sm font-light text-white/55 mt-3.5">
                  {socialLinks.map((link, index) => (
                    <React.Fragment key={link.name}>
                      <a
                        className="hover:text-white/90"
                        target="_blank"
                        href={link.href}
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                      {index < socialLinks.length - 1 && " • "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
  
              <div className="grid grid-cols-2 mt-16 md:grid-cols-3 lg:col-span-8 lg:justify-items-end lg:mt-0">
                {columns.map(({ title, links, button }) => (
                  <div key={title} className="last:mt-12 md:last:mt-0">
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {links.map(({ name, Icon, href }) => (
                        <li key={name}>
                          <a
                            href={href || "#"}
                            className="inline-flex items-center text-sm transition-all text-white/60 hover:text-white/90 group"
                          >
                            <Icon className="inline stroke-2 h-4 mr-1.5 transition-all stroke-white/60 group-hover:stroke-white/90" />
                            <span>{name}</span>
                          </a>
                        </li>
                      ))}
                      {button && (
                        <li className="pt-4">
                          <Button
                            asChild
                            variant="outline"
                            className="w-full border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:text-white"
                          >
                            <a href={button.href} className="inline-flex items-center justify-center">
                              {button.text}
                              <span className="ml-2">→</span>
                            </a>
                          </Button>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
  
            {copyright && (
              <div className="mt-20 border-t border-white/10 pt-6 pb-8">
                <p className="text-xs text-white/55">{copyright}</p>
              </div>
            )}
          </div>
        </div>
      );
    }
  );
  
  Footer.displayName = "Footer";