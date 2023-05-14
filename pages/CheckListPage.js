import CheckList from '../components/CheckList.js';

export default function CheckListPage() {
    return (
        <div id="container-checklist">
            <CheckList name="CheckList" tasks={["Ma première tâche"]} />
        </div>
    );
}