"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-black">Bureau Dimanche</div>
        <div className="flex gap-6 font-medium">
          <a href="mailto:anne@bureaudimanche.com" className="hover:opacity-70 transition">anne@bureaudimanche.com</a>
          <a href="#" className="hover:opacity-70 transition">LinkedIn</a>
          <a href="#" className="hover:opacity-70 transition">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
