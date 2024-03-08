import SpinnerLoader from "@/app/svgComponents/SpinnerLoader"
export default function loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return(<div className="text-center">
            <div role="status">
                <SpinnerLoader />
                <span className="sr-only">Getting the paint ready... </span>
            </div>
</div>)
  }