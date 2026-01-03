"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { StarIcon, StarOffIcon } from "lucide-react";
import { useState, useEffect, forwardRef } from "react";
import { toast } from "sonner";
import { toggleStarMarked } from "../actions";

interface MarkedToggleButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  markedForRevision: boolean;
  id: string;
}

export const MarkedToggleButton = forwardRef<
  HTMLButtonElement,
  MarkedToggleButtonProps
>(({ markedForRevision, id, onClick, className, children, ...props }, ref) => {
  const [isMarked, setIsMarked] = useState(markedForRevision);

  useEffect(() => {
    setIsMarked(markedForRevision);
  }, [markedForRevision]);

  const handleToggle = async (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    const newMarkedState = !isMarked;
    setIsMarked(newMarkedState);

    try {
      const res = await toggleStarMarked(id, newMarkedState);
      const { success, error, isMarked } = res;

      if (isMarked && !error && success) {
        toast.success("Added to favorites successfully");
      } else {
        toast.success("Removed from favorites successfully");
      }
    } catch (error) {
      console.error("Error toggling marked state:", error);
      setIsMarked(!newMarkedState);
      toast.error("An error occurred while updating favorite status.");
    }
  };

  return (
    <Button
      ref={ref}
      onClick={handleToggle}
      className={`flex items-center justify-center w-full px-2 py-1.5 text-sm rounded-md cursor-pointer ${className}`}
      variant={"ghost"}
      {...props}
    >
      {isMarked ? (
        <StarOffIcon size={16} className="text-muted-foreground mr-2" />
      ) : (
        <StarIcon size={16} className="text-yellow-400 mr-2" />
      )}
      {children || (isMarked ? "Unmark Favorite" : "Mark as Favorite")}
    </Button>
  );
});

MarkedToggleButton.displayName = "MarkedToggleButton";
