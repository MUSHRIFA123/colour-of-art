'use client';

export default function FooterPainting() {
  return (
    <footer className="bg-[#f6f1e7] text-[#4b2e2e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#6e3d3d]">About the Artist</h3>
          <p className="text-sm text-[#5c4033]">
            Inspired by nature, emotion, and everyday beauty, my paintings capture stories in every brushstroke. This space is where imagination meets canvas.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#6e3d3d]">Explore</h3>
          <ul className="space-y-2 text-sm text-[#5c4033]">
            <li><a href="/gallery" className="hover:text-[#a0522d] transition">Gallery</a></li>
            <li><a href="/about" className="hover:text-[#a0522d] transition">About Me</a></li>
            <li><a href="/exhibitions" className="hover:text-[#a0522d] transition">Exhibitions</a></li>
            <li><a href="/contact" className="hover:text-[#a0522d] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#6e3d3d]">Contact</h3>
          <p className="text-sm text-[#5c4033]">Have a project, commission, or custom request?</p>
          <p className="mt-2 text-sm">Email: <a href="mailto:art@yourdomain.com" className="underline text-[#4b2e2e]"></a></p>
          <p className="text-sm">Phone: </p>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#6e3d3d]">Connect</h3>
          <div className="flex flex-col space-y-2 text-sm text-[#5c4033]">
            <a href="#" target="_blank" className="hover:text-[#a0522d] transition">Instagram</a>
            <a href="#" target="_blank" className="hover:text-[#a0522d] transition">Pinterest</a>
            <a href="#" target="_blank" className="hover:text-[#a0522d] transition">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#d8cfc1] pt-6 text-center text-sm text-[#5c4033]">
        &copy; {new Date().getFullYear()} YourArtStudio. All rights reserved.
      </div>
    </footer>
  );
}
