import React from 'react';

const ThemedContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-light-background dark:bg-dark-background transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-6 text-light-text dark:text-dark-text">Themed Content Showcase</h1>

      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-3xl font-semibold text-light-secondary dark:text-dark-text mb-4">Headings</h2>
        <p className="text-light-text dark:text-dark-text mb-2">
          This is an example of a paragraph demonstrating light and dark mode text.
        </p>

        <p className="text-xxs text-light-muted">
  This is a paragraph with extra extra small font size.
</p>
       

       <div className='h-10 w-10 dark:bg-dark-secondary'>123</div>
      </section>

      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-3xl font-semibold text-light-text dark:text-dark-text mb-4">Buttons</h2>
        <button className="mr-4 px-4 py-2 bg-light-primary text-white rounded-lg shadow hover:opacity-80 transition-opacity duration-300">
          Primary Button
        </button>
        <button className="px-4 py-2 bg-light-secondary text-white rounded-lg shadow hover:opacity-80 transition-opacity duration-300">
          Secondary Button
        </button>
      </section>

      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-3xl font-semibold text-light-text dark:text-dark-text mb-4">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg shadow-lg bg-light-card text-light-text dark:bg-dark-card dark:text-dark-text transition-colors duration-500">
            <h3 className="text-xl font-semibold mb-2">Card Title 1</h3>
            <p>This is some content inside card 1.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-light-card text-light-text dark:bg-dark-card dark:text-dark-text transition-colors duration-500">
            <h3 className="text-xl font-semibold mb-2">Card Title 2</h3>
            <p>This is some content inside card 2.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemedContent;
