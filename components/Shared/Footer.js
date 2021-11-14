export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center bg-primary">
      <p className="py-2 text-xs">
        Copyright © GK Consulting {currentYear} | All rights reserved
      </p>
    </footer>
  );
}
