

export interface CustomBadgeProps{
text: string;
bgColor?: string;
textColor?: string;
mr?: string
}
export default function CustomBadge({text, bgColor = "black", textColor = "white", mr="4px"}: CustomBadgeProps) {
  return (
    <div className="mb-3  inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" style={{backgroundColor: bgColor, color: textColor, marginRight: mr}}>
      {text}
    </div>
  );
}
