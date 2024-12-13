import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentProps) {
    return (

        <div className="border border-dashed border-slate-300 space-y-10 rounded-lg p-5">
            <div className="space-y-3 mt-5">

                {order.map(item => (
                    <div key={item.id}
                        className="flex justify-between border-t border-gray-400 py-5 last-of-type:border-b">
                        <div>
                            <p>
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cant: {item.quantity} -{formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>


                        <button className="bg-red-400 h-8 w-8 rounded-full text-white"
                            onClick={() => removeItem(item.id)}>
                            X
                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

