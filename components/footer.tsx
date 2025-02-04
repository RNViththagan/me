export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Roy Nesarajah Viththagan. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
