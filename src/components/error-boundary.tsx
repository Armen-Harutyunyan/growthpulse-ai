"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  sectionName?: string;
}

interface State {
  hasError: boolean;
}

export class SectionErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[ErrorBoundary] ${this.props.sectionName || "Section"} error:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className={`min-h-[300px] flex flex-col items-center justify-center p-8 text-center rounded-3xl border-2 border-dashed border-destructive/20 bg-destructive/5 ${this.props.className}`}>
          <AlertCircle className="w-12 h-12 text-destructive mb-4 opacity-50" />
          <h3 className="text-xl font-bold mb-2">Section Update Required</h3>
          <p className="text-sm text-muted-foreground max-w-xs mb-6">
            We encountered a minor layout issue in this component. Our engineers have been notified.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-xl border-destructive/20 hover:bg-destructive/10"
            onClick={() => this.setState({ hasError: false })}
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Try Reloading Section
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
