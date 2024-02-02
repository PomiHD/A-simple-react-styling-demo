﻿import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import {DevSupport} from "@react-buddy/ide-toolbox";

ReactDOM.createRoot(document.getElementById('root')).render(<DevSupport ComponentPreviews={ComponentPreviews}
                                                                        useInitialHook={useInitial}
>
    <App/>
</DevSupport>);
