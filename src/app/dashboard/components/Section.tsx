interface SectionProps {
  heading: string;
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  return (
    <>
      <hr className='my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400' />
      <div className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>
        {props.heading}
      </div>
      <div>{props.children}</div>
    </>
  );
}
