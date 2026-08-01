interface PropertyDescriptionProps {
  description: string;
}

export default function PropertyDescription({
  description,
}: PropertyDescriptionProps) {
  return (
    <div className="rounded-2xl border bg-card p-4 md:p-6">
      <p className="text-sm font-medium text-primary">
        About this property
      </p>

      <h2 className="mt-1 text-2xl font-bold">
        Property Description
      </h2>

      <p className="mt-3 leading-8 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}