"use server";

import { IPropertyQuery } from "@/lib/types/property";
import { getProperties } from "./getProperties";

export const getPropertyMeta = async ({
  query,
}: {
  query?: IPropertyQuery;
}) => {
  const properties = await getProperties({ query });

  return properties.meta;
};
