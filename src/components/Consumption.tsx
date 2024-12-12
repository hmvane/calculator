import type { OrderItem } from "../types"


type OrderContentProps = {
    order: OrderItem[]
}

export default function Consumption({ order }: OrderContentProps) {
    return (
       
       <div className="border border-dashed border-slate-300 space-y-10 rounded-lg p-5">
        <div className="space-y-3 mt-5">
            {order.length === 0 ? 
            <p>
            La orden esta vaia
            </p> : (
                order.map( item => (
                    <div key={item.id}>
                        <p>
                            {item.name} - {item.price}
                        </p>
                    </div>
                ))
            )}
        </div>
       </div>
    )
}

