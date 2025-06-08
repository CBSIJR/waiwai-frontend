type TopicProps = {
    idTopic: string;
    titleTopic: string;
    children: React.ReactNode;
    bgColor: string;
  };
  
  const Topic: React.FC<TopicProps> = ({
    idTopic,
    titleTopic,
    children,
    bgColor,
  }) => (
    <section id={idTopic} className={`${bgColor} px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto py-12 sm:py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-700 mb-6">
            {titleTopic}
          </h1>
          <h2 className="font-bold mb-4"></h2>
          {children}
        </div>
      </div>
    </section>
  );
  
  export default Topic;
  