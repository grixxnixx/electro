const NotFound = () => {
  return (
    <section className="flex items-center h-dvh p-16 justify-center w-full">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-color-primary font-serif">
            <span className="sr-only ">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a
            rel="noopener noreferrer"
            href="/"
            className="px-8 py-3 font-semibold rounded bg-color-primary"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;