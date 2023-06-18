import React from "react";

// icons
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-800">
        <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img
                className="w-40"
                src="./assets/logo/logo-02.png"
                alt="float fashion"
              />

              <p class="mt-6 max-w-md leading-relaxed text-white sm:max-w-xs text-left">
                Fashion Float provides users with a convenient and stylish way
                to shop for clothes.
              </p>

              <ul class="mt-4 flex gap-6 md:gap-8">
                {sociolLinks.map((e, i) => (
                  <li key={i}>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white transition hover:text-orange-700/75">
                      <span class="sr-only">{e.name}</span>
                      {e.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              {links.map((e, i) => (
                <div
                  key={i}
                  class="text-left">
                  <p class="text-lg font-semibold text-white">{e.name}</p>

                  <ul class="mt-4 space-y-4 text-sm">
                    {e.links.map((e, i) => (
                      <li key={i}>
                        <a
                          class="text-gray-300 transition hover:text-orange-700/75"
                          href="/">
                          {e.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div class="text-left">
                <p class="text-lg font-semibold text-white">Helpful Links</p>

                <ul class="mt-4 space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-300 transition hover:text-orange-700/75"
                      href="/">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-300 transition hover:text-orange-700/75"
                      href="/">
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      class="group flex gap-1.5"
                      href="/">
                      <span class="text-gray-300 transition group-hover:text-orange-700/75">
                        Live Chat
                      </span>

                      <span class="relative flex h-2 w-2">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="text-left">
                <p class="text-lg font-semibold text-white">Contact Us</p>

                <ul class="mt-4 space-y-4 text-sm">
                  {contactUs.map((e, i) => (
                    <li key={i}>
                      <a
                        class="flex gap-1.5 text-gray-300"
                        href="/">
                        {e.icon}
                        <span class="flex-1 text-gray-300">{e.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-12 border-t border-gray-100 pt-6">
            <div class="sm:flex sm:justify-between text-left">
              <p class="text-sm text-white space-x-2 space-y-2">
                <span class="block sm:inline">All rights reserved.</span>

                <a
                  class="inline-block text-orange-600 underline transition hover:text-orange-600/75"
                  href="/">
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  class="inline-block text-orange-600 underline transition hover:text-orange-600/75"
                  href="/">
                  Privacy Policy
                </a>
              </p>

              <p class="mt-4 text-sm text-white sm:order-first sm:mt-0">
                &copy; 2024 Float Fashion
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const sociolLinks = [
  {
    name: "Facebook",
    link: "",
    icon: <BsFacebook size={"1.5rem"} />,
  },
  {
    name: "Instagram",
    link: "",
    icon: <BsInstagram size={"1.5rem"} />,
  },
  {
    name: "Twitter",
    link: "",
    icon: <BsTwitter size={"1.5rem"} />,
  },
  {
    name: "Github",
    link: "",
    icon: <BsGithub size={"1.5rem"} />,
  },
  {
    name: "Youtube",
    link: "",
    icon: <BsYoutube size={"1.5rem"} />,
  },
];

const contactUs = [
  {
    name: "email@mail.com",
    link: "",
    icon: <AiOutlineMail size={"1.5rem"} />,
  },
  {
    name: "+88016235465",
    link: "",
    icon: <AiOutlinePhone size={"1.5rem"} />,
  },
  {
    name: "Lane 1, London, United Kingdom",
    link: "",
    icon: <MdOutlineLocationOn size={"1.5rem"} />,
  },
];

const links = [
  {
    name: "About Us",
    links: [
      {
        name: "Company History",
        link: "",
      },
      {
        name: "Meet the Team",
        link: "",
      },
      {
        name: "Employee Handbook",
        link: "",
      },
      {
        name: "Careers",
        link: "",
      },
    ],
  },
  {
    name: "Our Services",
    links: [
      {
        name: "Web Development",
        link: "",
      },
      {
        name: "Web Design",
        link: "",
      },
      {
        name: "Marketing",
        link: "",
      },
      {
        name: "Google Ads",
        link: "",
      },
    ],
  },
];
