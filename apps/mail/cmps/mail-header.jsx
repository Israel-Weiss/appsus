
export function MailHeader() {
    return <header className="mail-header flex">
            <form>
                <label htmlFor="by-vendor">Searh:</label>
                <input type="text"/>
                <button>Filter!</button>
            </form>
    </header>
}