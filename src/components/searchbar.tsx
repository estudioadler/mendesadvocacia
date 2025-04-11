import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export const Searchbar = () => {
  return (
    <div className="flex gap-8 p-8 w-11/12 absolute -bottom-16 left-1/2 -translate-x-1/2 bg-primary-foreground">
      <h2 className="text-3xl max-w-sm">Pesquisar advogado por área de atuação</h2>
      <form action="" className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
            <Input className="flex-1" type="text" placeholder="Pesquisar" />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
        </div>
        <Button variant="default" className="flex-1" type="submit">Pesquisar</Button>
      </form>
    </div>
  );
};
