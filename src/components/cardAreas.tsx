import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardAreasProps {
    title: string
    description: string
}

export const CardAreas = ({title, description}: CardAreasProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-normal max-w-64 flex flex-col gap-4">
            {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-neutral-500">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};
