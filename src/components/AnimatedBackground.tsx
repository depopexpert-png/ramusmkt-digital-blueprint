export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>

      {/* Large ambient light orbs - bokeh effect */}
      <div className="absolute inset-0">
        {/* Top left cyan glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/15 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob"></div>
        
        {/* Top right amber glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
        
        {/* Bottom left teal glow */}
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-accent/20 rounded-full mix-blend-multiply filter blur-[140px] opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Center accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full mix-blend-multiply filter blur-[160px] opacity-40 animate-blob animation-delay-3000"></div>
      </div>

      {/* Bokeh light particles */}
      <div className="absolute inset-0">
        {/* Large bokeh circles */}
        <div className="absolute top-20 right-32 w-32 h-32 bg-gold/20 rounded-full filter blur-2xl opacity-60 animate-float"></div>
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-accent/25 rounded-full filter blur-xl opacity-70 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-32 right-40 w-40 h-40 bg-gold/15 rounded-full filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>
        
        {/* Medium bokeh circles */}
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-accent/30 rounded-full filter blur-xl opacity-60 animate-float animation-delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-gold/25 rounded-full filter blur-lg opacity-70 animate-float animation-delay-4000"></div>
        
        {/* Small accent lights */}
        <div className="absolute top-1/4 right-16 w-3 h-3 bg-accent rounded-full filter blur-sm opacity-80 animate-float animation-delay-1000"></div>
        <div className="absolute top-2/3 right-24 w-4 h-4 bg-gold rounded-full filter blur-sm opacity-70 animate-float animation-delay-5000"></div>
        <div className="absolute top-1/2 right-12 w-2 h-2 bg-accent rounded-full opacity-90 animate-float animation-delay-2000"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--accent)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40"></div>
    </div>
  );
};
