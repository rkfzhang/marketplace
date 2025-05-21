type CardProps = {
  title: string;
  description: string;
};
  

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-xs lg:max-w-sm xl:max-w-md">
        <div className="px-6 py-4">
          <h2 className="font-sans text-black-700 font-bold text-xl mb-2">{title}</h2>
          <p className="bg-white border-none rounded-none font-sans text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};