export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-4 w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gold/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gold/20 rounded-full animate-float animation-delay-3000"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-accent/20 rounded-full animate-float animation-delay-4000"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-gold/20 rounded-full animate-float animation-delay-5000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </div>
  );
};
