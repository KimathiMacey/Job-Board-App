export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center text-gray-600">
        <p>© {new Date().getFullYear()} JobBoard. All rights reserved.</p>
      </div>
    </footer>
  );
}
