"use client";

import { Button, Link } from "@heroui/react";

import VKXNavbar from "@/components/vkx-navbar/vkx-navbar";

export default function VKXNavbarPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Cách sử dụng</h2>
      <div className="bg-white dark:bg-gray-900 h-80 overflow-y-auto relative mb-10">
        <VKXNavbar
          isBordered
          centerItems={[
            {
              children: (
                <Link className="text-gray-900 dark:text-gray-100" href="/">
                  Home
                </Link>
              ),
              isActive: true,
            },
            {
              children: (
                <Link
                  className="text-gray-900 dark:text-gray-100"
                  href="/about"
                >
                  About
                </Link>
              ),
            },
            {
              children: (
                <Link
                  className="text-gray-900 dark:text-gray-100"
                  href="/services"
                >
                  Services
                </Link>
              ),
            },
            {
              children: (
                <Link
                  className="text-gray-900 dark:text-gray-100"
                  href="/contact"
                >
                  Contact
                </Link>
              ),
            },
          ]}
          endItems={[
            {
              children: <Button>Sign Up</Button>,
              onClick: () => console.log("Sign Up clicked"),
            },
          ]}
          height="4rem"
          maxWidth="lg"
          position="sticky"
          startBrand={<span className="font-bold text-xl">Logo</span>}
        />

        {/* Nội dung trang web của bạn */}
        <div className="max-w-2xl mx-auto">
          <h1 className="mb-4 text-xl font-bold">Welcome to my website</h1>
          <p className="mb-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
            eius reprehenderit dolorem qui quaerat corrupti, vel molestiae
            sapiente dicta? Vitae assumenda porro unde exercitationem velit
            tempore adipisci ad, dolor voluptas laboriosam ut reiciendis, illo
            quas delectus ratione! Nam vitae optio commodi mollitia nisi soluta
            adipisci eos magnam a provident veritatis, praesentium ullam
            quibusdam animi qui pariatur! Ratione consectetur fugit sed,
            nesciunt officia sequi reprehenderit fuga accusantium amet laborum
            vel necessitatibus sit veritatis recusandae rem atque ducimus
            delectus qui reiciendis mollitia. Quaerat aperiam aspernatur aut
            molestiae eveniet libero quisquam autem quo iure magnam repudiandae,
            expedita dolorem placeat ipsa ipsam est amet eligendi sed doloribus
            animi a quae numquam facilis? Nesciunt, dolores aut ipsa accusantium
            corrupti officiis esse illum debitis fugit. Molestias tenetur illo
            vitae, itaque praesentium minus voluptas cupiditate labore eum,
            doloribus, autem odio eos quo tempora non. Recusandae corporis rem
            quam ipsum nesciunt eius. Praesentium provident, iste ab voluptatem
            animi voluptatibus? Explicabo alias pariatur modi sequi similique
            eligendi placeat error nesciunt, quidem optio nihil tempora
            molestiae maiores ipsam, earum reprehenderit, veniam vero dicta.
            Necessitatibus, nemo? Nemo ex incidunt voluptas quisquam excepturi,
            labore inventore aspernatur quaerat eveniet vero optio possimus odio
            aut similique animi aperiam, accusamus officiis laudantium corrupti.
            Aliquam!
          </p>
          <p className="mb-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
            eius reprehenderit dolorem qui quaerat corrupti, vel molestiae
            sapiente dicta? Vitae assumenda porro unde exercitationem velit
            tempore adipisci ad, dolor voluptas laboriosam ut reiciendis, illo
            quas delectus ratione! Nam vitae optio commodi mollitia nisi soluta
            adipisci eos magnam a provident veritatis, praesentium ullam
            quibusdam animi qui pariatur! Ratione consectetur fugit sed,
            nesciunt officia sequi reprehenderit fuga accusantium amet laborum
            vel necessitatibus sit veritatis recusandae rem atque ducimus
            delectus qui reiciendis mollitia. Quaerat aperiam aspernatur aut
            molestiae eveniet libero quisquam autem quo iure magnam repudiandae,
            expedita dolorem placeat ipsa ipsam est amet eligendi sed doloribus
            animi a quae numquam facilis? Nesciunt, dolores aut ipsa accusantium
            corrupti officiis esse illum debitis fugit. Molestias tenetur illo
            vitae, itaque praesentium minus voluptas cupiditate labore eum,
            doloribus, autem odio eos quo tempora non. Recusandae corporis rem
            quam ipsum nesciunt eius. Praesentium provident, iste ab voluptatem
            animi voluptatibus? Explicabo alias pariatur modi sequi similique
            eligendi placeat error nesciunt, quidem optio nihil tempora
            molestiae maiores ipsam, earum reprehenderit, veniam vero dicta.
            Necessitatibus, nemo? Nemo ex incidunt voluptas quisquam excepturi,
            labore inventore aspernatur quaerat eveniet vero optio possimus odio
            aut similique animi aperiam, accusamus officiis laudantium corrupti.
            Aliquam!
          </p>
          <p className="mb-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
            eius reprehenderit dolorem qui quaerat corrupti, vel molestiae
            sapiente dicta? Vitae assumenda porro unde exercitationem velit
            tempore adipisci ad, dolor voluptas laboriosam ut reiciendis, illo
            quas delectus ratione! Nam vitae optio commodi mollitia nisi soluta
            adipisci eos magnam a provident veritatis, praesentium ullam
            quibusdam animi qui pariatur! Ratione consectetur fugit sed,
            nesciunt officia sequi reprehenderit fuga accusantium amet laborum
            vel necessitatibus sit veritatis recusandae rem atque ducimus
            delectus qui reiciendis mollitia. Quaerat aperiam aspernatur aut
            molestiae eveniet libero quisquam autem quo iure magnam repudiandae,
            expedita dolorem placeat ipsa ipsam est amet eligendi sed doloribus
            animi a quae numquam facilis? Nesciunt, dolores aut ipsa accusantium
            corrupti officiis esse illum debitis fugit. Molestias tenetur illo
            vitae, itaque praesentium minus voluptas cupiditate labore eum,
            doloribus, autem odio eos quo tempora non. Recusandae corporis rem
            quam ipsum nesciunt eius. Praesentium provident, iste ab voluptatem
            animi voluptatibus? Explicabo alias pariatur modi sequi similique
            eligendi placeat error nesciunt, quidem optio nihil tempora
            molestiae maiores ipsam, earum reprehenderit, veniam vero dicta.
            Necessitatibus, nemo? Nemo ex incidunt voluptas quisquam excepturi,
            labore inventore aspernatur quaerat eveniet vero optio possimus odio
            aut similique animi aperiam, accusamus officiis laudantium corrupti.
            Aliquam!
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Dropdown Menu</h2>
      <div className="h-80 bg-gray-200 dark:bg-gray-800">
        <VKXNavbar
          isBordered
          centerItems={[
            {
              children: (
                <Link className="text-gray-900 dark:text-gray-100" href="/">
                  Home
                </Link>
              ),
              isActive: true,
            },
            {
              children: (
                <Link
                  className="text-gray-900 dark:text-gray-100"
                  href="/about"
                >
                  About
                </Link>
              ),
            },
            {
              children: (
                <Link
                  className="text-gray-900 dark:text-gray-100"
                  href="/services"
                >
                  Services
                </Link>
              ),
            },
            {
              children: (
                <Link
                  className="text-gray-900 dark:text-gray-100"
                  href="/contact"
                >
                  Contact
                </Link>
              ),
            },
          ]}
          endItems={[
            {
              children: <Button variant="flat">Login</Button>,
              onClick: () => console.log("Login clicked"),
            },
            {
              children: <Button>Sign Up</Button>,
              onClick: () => console.log("Sign Up clicked"),
            },
          ]}
          height="4rem"
          maxWidth="lg"
          menuItems={[
            { children: <Link href="/">Home</Link>, isActive: true },
            { children: <Link href="/about">About</Link> },
            { children: <Link href="/services">Services</Link> },
            { children: <Link href="/contact">Contact</Link> },
            { children: <Link href="/login">Login</Link> },
            { children: <Link href="/signup">Sign Up</Link> },
          ]}
          position="sticky"
          startBrand={<span className="font-bold text-xl">Logo</span>}
        />
      </div>
    </>
  );
}
