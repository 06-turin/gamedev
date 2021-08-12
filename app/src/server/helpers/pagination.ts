type TData<T> = {
  count: number,
  rows: T[]
}

export type PagingData<T> = {
  results: T[],
  totalItems: number,
  totalPages: number,
  currentPage: number
}

export const getPagingData = <T>(data: TData<T>, page: number, limit: number): PagingData<T> => {
  const { count: totalItems, rows: results } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems, results, totalPages, currentPage,
  };
};

export const getOffset = (page: number | undefined, perPage: number): number => (page && page > 0
  ? (page - 1) * perPage
  : 0);
