export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} 我的个人网站. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 