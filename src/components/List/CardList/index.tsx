import {
    List,
    Pagination,
    Spin,
    Empty,
    Input,
    Button,
    Card,
    Typography,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { CardListProps } from "./CardList.type";

export function CardList<T>({
    data,
    cardDetails,
    pageSize = 10,
    total,
    currentPage,
    onPageChange,
    loading = false,
    emptyText = "Nenhum item encontrado.",
    search,
    isError,
    error,
    refetch,
}: CardListProps<T> & {
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
}) {
    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-6 max-w-xl mx-auto text-center rounded-xl border border-red-100 bg-red-50 shadow-sm">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                    Erro ao listar os dados
                </h3>
                <p className="text-base text-primary mb-6 max-w-xs">
                    {error instanceof Error
                        ? error.message
                        : "Ocorreu um erro desconhecido!"}
                </p>
                <Button onClick={() => refetch?.()} type="primary" danger>
                    Tentar novamente
                </Button>
            </div>
        );
    }

    return (
        <div className="mx-2 lg:w-[500px] lg:mx-0">
            <div className="w-full max-w-screen-xl px-4 mx-auto flex flex-col gap-2">
                {search && (
                    <Input
                        placeholder={`Digite para buscar um item...`}
                        allowClear
                        size="large"
                        value={search.searchValue}
                        onChange={(e) =>
                            search.setSearch((prev) => ({
                                ...prev,
                                q: e.target.value,
                                page: 1,
                            }))
                        }
                        className="rounded-lg shadow-sm border border-stroke focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition"
                    />
                )}

                <Spin spinning={loading}>
                    {data.length === 0 && !loading ? (
                        <Empty className="w-full" description={emptyText} />
                    ) : (
                        <List
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item className="flex">
                                    <Card
                                        className="w-full h-full flex flex-col justify-between"
                                        hoverable={cardDetails(item).hoverable}
                                        onClick={cardDetails(item).onClick}
                                        actions={
                                            cardDetails(item).onEdit ||
                                            cardDetails(item).onDelete
                                                ? [
                                                      cardDetails(item)
                                                          .onEdit && (
                                                          <EditOutlined
                                                              key="edit"
                                                              onClick={(e) => {
                                                                  e.stopPropagation();
                                                                  cardDetails(
                                                                      item
                                                                  )?.onEdit?.(
                                                                      item
                                                                  );
                                                              }}
                                                              className="text-primary"
                                                          />
                                                      ),
                                                      cardDetails(item)
                                                          .onDelete && (
                                                          <DeleteOutlined
                                                              key="delete"
                                                              onClick={(e) => {
                                                                  e.stopPropagation();
                                                                  cardDetails(
                                                                      item
                                                                  ).onDelete?.(
                                                                      item
                                                                  );
                                                              }}
                                                              className="text-primary"
                                                          />
                                                      ),
                                                  ].filter(Boolean)
                                                : undefined
                                        }
                                    >
                                        <div className="flex flex-col gap-2 sm:gap-4">
                                            <Typography.Title
                                                level={4}
                                                ellipsis={{
                                                    tooltip: {
                                                        title: cardDetails(item)
                                                            .title,
                                                    },
                                                }}
                                                className="text-lg sm:text-xl font-semibold text-dark break-words"
                                            >
                                                {cardDetails(item).title}
                                            </Typography.Title>
                                            <div>
                                                {cardDetails(item).children}
                                            </div>
                                        </div>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    )}
                </Spin>
            </div>

            {data.length > 0 && (
                <div className="flex justify-center mt-6">
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={total}
                        onChange={onPageChange}
                        showSizeChanger
                    />
                </div>
            )}
        </div>
    );
}
