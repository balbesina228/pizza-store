import { cn } from "@/lib/utils";
import { Pizza } from "lucide-react";
import { Button } from "@/components/ui";
import { Container } from "./container";

interface Props {
  className?: string;
}

function Header(props: Props) {
  const { className } = props;

  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Pizza width={35} height={35} color="orange" />
          <div>
            <h1 className="text-2xl uppercase font-black">Pizza Store</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкуснее уже некуда =]
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Войти</Button>
        </div>
      </Container>
    </header>
  );
}

export { Header };
