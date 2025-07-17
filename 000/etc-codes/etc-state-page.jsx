const { stateSlug } = params;
  const state = states?.find((s) => s.slug === stateSlug);
  if (!state) {
    return notFound();
  }