import 'vuact/setup-scheduler';
import 'vuact-dom/register-dom-components';
import { configure } from 'mobx';
import '../../react-mobX/src/main.jsx';

configure({ reactionScheduler: (fn) => queueMicrotask(fn) });
