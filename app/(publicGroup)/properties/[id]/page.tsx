
export default async function PropertiesByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
     const { id } = await params;
  return (
    <div>PropertyByIdPage {id}</div>
  )
}
