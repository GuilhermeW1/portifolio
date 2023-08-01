interface SectionProps {
  header: string
  children: React.ReactNode
}

export default function Section({children, header}: SectionProps){
  return(
    <section
      className="animate-section w-full"
    >
    <h3 
      className="text-xl font-semibold underline decoration-4 underline-offset-4 mt-3 mb-4 decoration-gray-400 dark:text-white"
    >
      {header}
    </h3>
      {children}
    </section>
  );
}