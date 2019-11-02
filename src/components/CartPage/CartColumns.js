import React from 'react'

function CartColumns() {
    return (
        <div className='container-fluid text-center d-none d-lg-block my-5'>
            <div className="row">
                {/* single column */}
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">product</p>
                </div>
                {/* end of single column */}

                {/* single column */}
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name</p>
                </div>
                {/* end of single column */}

                {/* single column */}
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                {/* end of single column */}

                {/* single column */}
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                {/* end of single column */}

                {/* single column */}
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                {/* end of single column */}

                {/* single column */}
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
                {/* end of single column */}
            </div>
        </div>
    )
}

export default CartColumns
