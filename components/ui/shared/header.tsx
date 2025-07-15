import { cn } from "@/lib/utils";
import { ArrowRight, Pizza, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui";
import { Container } from "./container";
import { Title } from "./title";

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
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            Войти
          </Button>
          <Button variant={"defaultWhiteText"} className="group relative flex items-center gap-0">
            <span>0 ₽</span>
            <span className="h-full w-[1px] bg-white/30 mx-3" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart size={16} className="relative" strokeWidth={2}/>
              <span>100</span>
            </div>
            <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 opacity-0" />
          </Button>
        </div>
      </Container>
    </header>
  );
}

export { Header };
