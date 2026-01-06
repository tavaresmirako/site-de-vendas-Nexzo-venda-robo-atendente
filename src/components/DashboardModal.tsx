import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BarChart3 } from "lucide-react";

interface DashboardModalProps {
  children: React.ReactNode;
  dashboardImage?: string;
}

export const DashboardModal = ({ children, dashboardImage }: DashboardModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Dashboard de Atendimento
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 w-full flex items-center justify-center bg-card rounded-lg border border-border p-4">
          {dashboardImage ? (
            <img 
              src={dashboardImage} 
              alt="Dashboard de Atendimento" 
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="w-full h-96 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Dashboard em breve</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
