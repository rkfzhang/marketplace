import { InformationCircleIcon } from "@heroicons/react/24/solid";

type CardProps = {
  content: string;
};
  

export const InsightsCard = ({ content }: CardProps) => {
  return (
    <div className="insights-wrapper">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full p-2">
        <div className="flex items-center">
          <InformationCircleIcon className="h-6 w-6 m-2 text-blue-200"/>
          <span className="m-2">{content}</span>
        </div>
      </div>
    </div>
  );
};