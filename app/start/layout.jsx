import LoadingInterview from "./loading";
import { Suspense } from "react";
import Loading from "@/app/start/loading.js"

export default function StartLayout({ children }) {
    return (
            <div className="grid">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>

    );
  }