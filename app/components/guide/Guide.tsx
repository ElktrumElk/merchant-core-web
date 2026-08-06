import Link from "next/link";
import Reveal from "../animations/Reveal";
import "./guide.css";

const toc = [
  { href: "#getting-started", label: "Getting Started" },
  { href: "#navigation", label: "Navigation" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#inventory", label: "Inventory" },
  { href: "#pos", label: "Point of Sale" },
  { href: "#credit-ledger", label: "Credit Ledger" },
  { href: "#customers", label: "Customers" },
  { href: "#calculator", label: "Calculator" },
  { href: "#marketplace", label: "Marketplace & Ads" },
  { href: "#spreadsheet", label: "Spreadsheet" },
  { href: "#organisation", label: "Organisation Workspace" },
  { href: "#notifications", label: "Notifications & Alerts" },
  { href: "#settings", label: "Settings" },
  { href: "#faq", label: "FAQ" },
];

const steps = [
  {
    num: "1",
    title: "Sign up",
    desc: "Enter your full name, email address, username, and password on the Sign Up form and click Submit.",
  },
  {
    num: "2",
    title: "Verify your email",
    desc: "Check your inbox for a 6-digit verification code. Enter it on the Verify Email page and click Verify.",
  },
  {
    num: "3",
    title: "Log in",
    desc: "Enter your email and password on the Login form. You will land on your Dashboard.",
  },
];

const Guide = () => {
  return (
    <section className="guide">
      <Reveal className="guide-hero" whileInView={{ opacity: 1, y: 0 }}>
        <span className="badge">User Guide</span>
        <h1 className="guide-hero-title">
          How to Use Merchant Core
        </h1>
        <p className="guide-hero-desc">
          A complete walkthrough of every feature in the Merchant Core
          application — from creating your first account to running sales,
          tracking who owes you, selling on the marketplace, using the
          spreadsheet workspace, and running an organisation with finance,
          HRM, and payroll.
        </p>
      </Reveal>

      <nav className="guide-toc">
        <span className="guide-toc-label">On this page</span>
        <ul>
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Getting Started ─────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="getting-started"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Getting Started</h2>
        <p className="guide-section-intro">
          Merchant Core runs entirely in your browser — no install required.
          Visit the app at
          {" "}
          <a
            href="https://merchant-core-bay.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            merchant-core-bay.vercel.app
          </a>
          {" "}and follow these three steps.
        </p>

        <div className="guide-steps">
          {steps.map((step) => (
            <div key={step.num} className="guide-step">
              <div className="guide-step-num">{step.num}</div>
              <div>
                <strong className="guide-step-title">{step.title}</strong>
                <p className="guide-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="guide-callout">
          <strong>Already have an account?</strong> Just click{" "}
          <strong>Login</strong> and enter your credentials. If you did not
          receive a verification code, click the{" "}
          <em>&quot;Verify your email&quot;</em> link at the bottom of the login form.
        </div>
      </Reveal>

      {/* ── Navigation ──────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="navigation"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Navigation</h2>
        <p className="guide-section-intro">
          On desktop the app shows a sidebar on the left with links to every
          section. On mobile, a bottom navigation bar provides the same links.
          The top of the sidebar displays <strong>MerchantCore — Business
          Pro</strong> alongside a <strong>Quick Sale</strong> button that
          takes you straight to the POS.
        </p>

        <div className="guide-nav-grid">
          {[
            { label: "Dashboard", desc: "Overview of your business at a glance" },
            { label: "Inventory", desc: "Add, edit, and track all your products" },
            { label: "Credit Ledger", desc: "Who owes you and who has paid" },
            { label: "POS", desc: "Ring up sales and manage carts" },
            { label: "Customers", desc: "Directory of every customer" },
            { label: "Calculator", desc: "Business math, margins, and currency conversion" },
            { label: "Market", desc: "Browse shops, cart, checkout, and billboard ads" },
            { label: "Spreadsheet", desc: "Excel-style workbook editor with autosave" },
            { label: "Notifications", desc: "Org-wide activity feed with unread badge" },
          ].map((item) => (
            <div key={item.label} className="guide-nav-item">
              <span className="guide-nav-label">{item.label}</span>
              <span className="guide-nav-desc">{item.desc}</span>
            </div>
          ))}
        </div>

        <div className="guide-callout">
          <strong>Organisation accounts</strong> see additional navigation
          items — <em>Users</em>, <em>Finance</em>, and <em>HRM</em> — based on
          their role (Super Admin, Admin, HRM Manager, or Finance Manager), plus
          a <em>My Attendance</em> self check-in page for every member.
        </div>
      </Reveal>

      {/* ── Dashboard ────────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="dashboard"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Dashboard</h2>
        <p className="guide-section-intro">
          The first thing you see after logging in. It gives a real-time
          overview of your business with four key stat cards, a revenue
          chart, recent transactions, and alerts.
        </p>

        <div className="guide-cards">
          <div className="guide-card">
            <h3 className="guide-card-title">Stat cards</h3>
            <p>
              <strong>Total Revenue</strong> — lifetime revenue plus this
              month&apos;s figure.
              <br />
              <strong>Orders</strong> — total number of completed transactions,
              active customer count, and average ticket size.
              <br />
              <strong>Inventory</strong> — total value of stock on hand and
              total product count.
              <br />
              <strong>Credit Outstanding</strong> — amount currently owed to
              you by customers, plus low stock alerts.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Revenue Trend</h3>
            <p>
              A line chart showing monthly revenue for the last six months.
              The more sales you record, the more meaningful this chart
              becomes.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Recent Transactions</h3>
            <p>
              The last five transactions in the system — each tagged as a
              sale, payment, or purchase, with a status of completed or
              pending. Click <em>View All</em> to see the full transaction
              log in POS.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Alerts</h3>
            <p>
              Automatic notifications for low-stock items and overdue credit
              accounts. Alerts are generated from your inventory and credit
              data.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Inventory ────────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="inventory"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Inventory</h2>
        <p className="guide-section-intro">
          Keep track of every product in your shop — name, SKU, price,
          stock quantity, and category. Stock status is calculated
          automatically: items with low quantities are flagged, and out-of-stock
          items are marked separately.
        </p>

        <div className="guide-steps">
          <div className="guide-step">
            <div className="guide-step-num">+</div>
            <div>
              <strong className="guide-step-title">Add a product</strong>
              <p className="guide-step-desc">
                Click <em>Add Item</em> in the top right. Fill in the
                product name, SKU (a unique code like BVR-001), price,
                stock quantity, and a category (e.g. Beverages, Snacks).
                Click <em>Create</em> to save.
              </p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
            </div>
            <div>
              <strong className="guide-step-title">Edit a product</strong>
              <p className="guide-step-desc">
                Tap the pencil icon on any product card. Update the fields
                and click <em>Update</em>.
              </p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            </div>
            <div>
              <strong className="guide-step-title">Delete a product</strong>
              <p className="guide-step-desc">
                Tap the trash icon and confirm. Deleted products are
                removed permanently.
              </p>
            </div>
          </div>
        </div>

        <div className="guide-callout">
          <strong>Filtering:</strong> use the <em>All</em>, <em>Low Stock</em>,
          and <em>Out</em> tabs to narrow the list. A search bar at the top
          filters by product name.
          <br />
          <strong>Marketplace sync:</strong> items listed on the market are
          marked <em>On market</em> / <em>Listed</em> with a{" "}
          <em>Remove from market</em> button, and editing a product here
          updates its marketplace listing automatically.
        </div>
      </Reveal>

      {/* ── POS ──────────────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="pos"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Point of Sale (POS)</h2>
        <p className="guide-section-intro">
          The POS is where you ring up sales. It has a product grid, a
          shopping cart, payment selection, and a transaction log.
        </p>

        <div className="guide-steps">
          <div className="guide-step">
            <div className="guide-step-num">1</div>
            <div>
              <strong className="guide-step-title">Browse products</strong>
              <p className="guide-step-desc">
                Products are displayed in a grid. Use the category tabs
                (All Items, Beverages, Snacks, etc.) to filter. Each card
                shows the product name, price, and stock status.
              </p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">2</div>
            <div>
              <strong className="guide-step-title">Build a cart</strong>
              <p className="guide-step-desc">
                Click <em>Add</em> on a product to place it in the cart.
                Switch to the <em>Cart</em> view to adjust quantities with
                the +/− buttons, remove items, or proceed to checkout.
                Out-of-stock items cannot be added.
              </p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">3</div>
            <div>
              <strong className="guide-step-title">Select payment &amp; checkout</strong>
              <p className="guide-step-desc">
                Choose a payment method — <strong>Cash</strong>,{" "}
                <strong>Card</strong>, or <strong>Mobile</strong> — from the
                row of buttons below the cart totals. Tax is calculated
                automatically at 5%. When ready, click{" "}
                <em>Checkout &lt;total&gt;</em>. A success banner confirms
                the sale and stock levels are adjusted.
              </p>
            </div>
          </div>
        </div>

        <div className="guide-callout">
          <strong>Transaction Log:</strong> Click the <em>Log</em> button
          next to the payment methods to see a modal listing your recent
          transactions — type, amount, customer, timestamp, and status.
        </div>
      </Reveal>

      {/* ── Credit Ledger ────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="credit-ledger"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Credit Ledger</h2>
        <p className="guide-section-intro">
          Keep track of every customer who owes you money. Each entry shows
          the customer name, code, balance, last payment, and a colour-coded
          status.
        </p>

        <div className="guide-cards">
          <div className="guide-card">
            <h3 className="guide-card-title">Statuses</h3>
            <p>
              <span className="guide-tag guide-tag-active">Active</span>{" "}
              — paid on time or settled.
              {" "}
              <span className="guide-tag guide-tag-overdue">Overdue</span>{" "}
              — payment is late.
              {" "}
              <span className="guide-tag guide-tag-critical">Critical</span>{" "}
              — severely overdue; action needed.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Add a credit entry</h3>
            <p>
              Click <em>+ New Entry</em>. Enter the customer name, an
              optional customer code, and the initial balance owed. Click{" "}
              <em>Create Entry</em>.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Record a payment</h3>
            <p>
              Click the <em>•••</em> menu on any row, then select{" "}
              <em>Record Payment</em>. Enter the amount paid and click{" "}
              <em>Record Payment</em>. The balance updates automatically.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Toggle status</h3>
            <p>
              Use the <em>•••</em> menu to toggle a customer between{" "}
              <em>Active</em> and <em>Overdue</em>. The filter at the top
              of the table narrows the list by status.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Customers ────────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="customers"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Customers</h2>
        <p className="guide-section-intro">
          A searchable directory of every customer. Select a customer from
          the list to view their full profile in the detail panel.
        </p>

        <div className="guide-steps">
          <div className="guide-step">
            <div className="guide-step-num">+</div>
            <div>
              <strong className="guide-step-title">Add a customer</strong>
              <p className="guide-step-desc">
                Click <em>Add</em> next to the page title. Fill in their
                name, email, phone, company, and credit limit, then click{" "}
                <em>Create</em>.
              </p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <strong className="guide-step-title">View their profile</strong>
              <p className="guide-step-desc">
                Click any name in the list. The detail panel shows their
                tier badge (Platinum / Gold / Silver / Bronze), email,
                phone, total spent, credit limit, and last purchase date.
              </p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-num">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            </div>
            <div>
              <strong className="guide-step-title">Add to credit</strong>
              <p className="guide-step-desc">
                From the detail panel, click the credit card icon to
                create a new credit entry for this customer. You can also
                click the edit icon to update their profile or the mail
                icon to open an email compose window.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Calculator ───────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="calculator"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Calculator</h2>
        <p className="guide-section-intro">
          Three calculators built in, accessible from the Calculator page.
        </p>

        <div className="guide-cards">
          <div className="guide-card">
            <h3 className="guide-card-title">Basic Calculator</h3>
            <p>
              Standard arithmetic — add, subtract, multiply, divide,
              percentage, and sign flip. Same layout as a physical
              calculator.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Business Calculator</h3>
            <p>
              Six tools for everyday business math:
            </p>
            <ul className="guide-list">
              <li><strong>Margin</strong> — profit and margin % from cost and revenue.</li>
              <li><strong>Markup</strong> — selling price from cost and markup %.</li>
              <li><strong>Tax</strong> — calculate tax on an amount and find the total.</li>
              <li><strong>ROI</strong> — return on investment % from investment and return.</li>
              <li><strong>Break-Even</strong> — units needed to cover fixed costs.</li>
              <li><strong>Discount</strong> — final price and savings from a discount %.</li>
            </ul>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Currency Converter</h3>
            <p>
              Convert between 10 currencies in real time: NLE, USD, EUR,
              GBP, NGN, GHS, KES, ZAR, INR, and CNY. Enter an amount,
              pick the source and target currencies, and the result
              appears instantly.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Marketplace & Billboard Ads ──────────────────── */}
      <Reveal
        className="guide-section"
        id="marketplace"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Marketplace &amp; Billboard Ads</h2>
        <p className="guide-section-intro">
          The Marketplace is an in-app shopping hub at{" "}
          <strong>/home/market</strong>. Shoppers browse shops and their
          products, build a cart, and check out — while a billboard beside the
          top-rated shops plays short, muted, autoplaying video adverts.
        </p>

        <div className="guide-cards">
          <div className="guide-card">
            <h3 className="guide-card-title">Browse shops</h3>
            <p>
              The hub lists shops and their products, plus a{" "}
              <em>top-rated</em> panel. Open a shop profile (for example{" "}
              <em>sunrise_mart@123456</em>) to see its overview, map location,
              products, and ratings. Category tabs and search narrow the
              product grid.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Cart &amp; checkout</h3>
            <p>
              Click <em>Add to cart</em> on any product. The cart panel (a
              side column on desktop, a slide-up overlay on mobile) lets you
              adjust quantities, remove items, and see the subtotal, 5% tax,
              and total. Checkout routes the order to every shop that owns an
              item and confirms with an &quot;Order sent to shops&quot;
              dialog. Empty carts cannot be checked out.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Billboard ads</h3>
            <p>
              The billboard plays <strong>exactly three</strong> randomly
              picked adverts, one at a time, looping forever. Each advert is a
              muted video with no controls; clips without video fall back to a
              poster image and auto-advance. Clicking an advert opens its{" "}
              <em>visitLink</em> in a new tab.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Open your own shop</h3>
            <p>
              Click <em>Upload to shop</em> in the POS page header or under
              Settings. If you have no shop yet, a create-shop form appears;
              otherwise you pick POS items in{" "}
              <em>All items</em> / <em>Selected items</em> modes. Already
              uploaded items are highlighted so nothing is double-added. On
              your own shop page, an <em>Add new items</em> button opens the
              same panel scoped to that shop.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Keep the market in sync</h3>
            <p>
              Items listed on the market are marked <em>On market</em> /
              <em>Listed</em> in the Inventory page and the Supply Chain
              tracker, where a <em>Remove from market</em> button takes them
              down. Editing an inventory item&apos;s name, price, or stock
              propagates live to its marketplace copy.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Spreadsheet ──────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="spreadsheet"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Spreadsheet Workspace</h2>
        <p className="guide-section-intro">
          The Spreadsheet page at <strong>/home/spreadsheet</strong> is a full
          Excel-style editor built on the FortuneSheet engine. It replaces
          hand-rolled grids with a battle-tested workbook workspace.
        </p>

        <div className="guide-cards">
          <div className="guide-card">
            <h3 className="guide-card-title">Workspace view</h3>
            <p>
              Cards list every saved workbook, newest first. Click{" "}
              <em>New Workbook</em> to create one (this also posts an entry to
              the organisation activity feed). The trash icon deletes a
              workbook with a confirmation.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Editor view</h3>
            <p>
              Opening a workbook loads the full spreadsheet grid with a
              formula bar and cell toolbar. Changes are{" "}
              <strong>autosaved on every edit</strong>, and an explicit{" "}
              <em>Save / Ctrl+S</em> shows a &quot;Saved&quot; flash. You can
              rename the workbook inline.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Import &amp; export</h3>
            <p>
              <em>Import</em> accepts <strong>.xlsx</strong> and{" "}
              <strong>.csv</strong> files; <em>Export to Excel</em> downloads
              the current sheet. Formula-heavy Excel workbooks keep working
              because data is stored in a compact cell format.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Shareable deep links</h3>
            <p>
              Every workbook has its own <em>?id=&lt;workbookId&gt;</em> URL.
              Share the link and the editor opens directly on that workbook.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Organisation Workspace ───────────────────────── */}
      <Reveal
        className="guide-section"
        id="organisation"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Organisation Workspace</h2>
        <p className="guide-section-intro">
          An Organisation is a multi-user business workspace. A person
          registers an organisation and becomes its <strong>Super Admin</strong>,
          then adds Admins, managers, and staff. Members log in with the
          organisation name plus their own credentials.
        </p>

        <div className="guide-cards">
          <div className="guide-card">
            <h3 className="guide-card-title">Roles &amp; access</h3>
            <p>
              Five roles follow a clear hierarchy —{" "}
              <strong>Super Admin</strong> (full control),{" "}
              <strong>Admin</strong> (manages staff and managers, accesses
              Finance and HRM), <strong>HRM Manager</strong> (HRM only),{" "}
              <strong>Finance Manager</strong> (Finance only), and{" "}
              <strong>Staff</strong> (POS, inventory, and daily work). The
              Users page manages members, roles, and account status.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Finance &amp; Accounting</h3>
            <p>
              For Super Admins, Admins, and Finance Managers: a{" "}
              <em>General Ledger</em> of every income and expense, automated{" "}
              <em>invoicing</em> (draft → sent → paid, or void),{" "}
              <em>tax compliance</em> obligations with due dates, and a{" "}
              <em>real-time balance sheet</em> that recomputes assets,
              liabilities, and equity from live invoice and tax state.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">HRM &amp; Payroll</h3>
            <p>
              For Super Admins, Admins, and HRM Managers: manage the whole
              employee lifecycle — <em>employees</em> (probation → active →
              on-leave / terminated / retired), <em>payroll runs</em> per
              period (gross, 10% tax, net), <em>time &amp; attendance</em> with
              a today roster, <em>performance reviews</em> scored 1–5, and{" "}
              <em>benefits administration</em>.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Self check-in (My Attendance)</h3>
            <p>
              Every member has an Attendance page. Press{" "}
              <em>Present</em> to check in for the day (one record per day) —
              it flows straight into HRM&apos;s attendance view and auto-creates
              your employee profile on first check-in. You also see your own
              attendance rate, days present, hours, and latest review.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Account blocking rules</h3>
            <p>
              <em>Disable</em> a member for a full lockout,{" "}
              <em>block login</em> to reject sign-in with a clear message, or{" "}
              <em>block dashboard data</em> to hide business numbers while
              still allowing access. These are managed per member by Admins.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Notifications & Alerts ───────────────────────── */}
      <Reveal
        className="guide-section"
        id="notifications"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Notifications &amp; Alerts</h2>
        <p className="guide-section-intro">
          Every action taken in the workspace appears in an org-wide, fully
          transparent activity feed. The header <strong>bell</strong> shows an
          unread badge and a dropdown; the <strong>Notifications</strong> page
          lists the complete history, newest first.
        </p>

        <div className="guide-cards">
          <div className="guide-card">
            <h3 className="guide-card-title">What gets tracked</h3>
            <p>
              <strong>Alerts</strong> — POS sales at checkout, credit payments,
              invoices marked paid or voided, and payroll runs.{" "}
              <strong>Notifications</strong> — invoices created, employee
              check-ins, and system messages. Each row shows the type icon,
              the actor and their role, the amount, and a reference.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Your read state</h3>
            <p>
              Read state is tracked per member, so everyone has their own
              unread count. <em>Mark all read</em> clears your badge; new
              activity emitted anywhere in the app updates the feed
              automatically.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Delete permissions</h3>
            <p>
              Only the <strong>Super Admin</strong> can delete or clear
              notifications by default. The Super Admin can switch on an
              &quot;Admins can delete&quot; setting to extend that to Admins.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Settings ─────────────────────────────────────── */}
      <Reveal
        className="guide-section"
        id="settings"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Settings</h2>
        <p className="guide-section-intro">
          Manage your account and display preferences from a single page.
        </p>

        <div className="guide-cards">
          <div className="guide-card">
            <h3 className="guide-card-title">Profile</h3>
            <p>
              Displays your full name, username, and email. These are
              set during sign-up and reflect what is stored in your
              account.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Currency Preference</h3>
            <p>
              Choose the currency displayed throughout the app. The
              default is <strong>NLE</strong> (Sierra Leonean New Leones).
              Options include USD, EUR, GBP, NGN, GHS, KES, ZAR, INR,
              and CNY. A live preview shows how 1,000 units convert.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Appearance</h3>
            <p>
              Toggle between <strong>Light mode</strong> and{" "}
              <strong>Dark mode</strong>. Your choice is remembered
              across sessions.
            </p>
          </div>
          <div className="guide-card">
            <h3 className="guide-card-title">Sign Out</h3>
            <p>
              Ends your session and returns you to the Login screen.
              Close your browser tab after signing out on a shared
              computer.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Reveal
        className="guide-section guide-faq"
        id="faq"
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="guide-section-title">Frequently Asked Questions</h2>

        {[
          {
            q: "Is Merchant Core free?",
            a: "Yes. There is no subscription fee. You can sign up and start using all features immediately.",
          },
          {
            q: "Do I need to install anything?",
            a: "No. Merchant Core runs in any modern web browser — on desktop, tablet, or mobile. There is nothing to install.",
          },
          {
            q: "Does it work offline?",
            a: "Not yet. An internet connection is required while using the app.",
          },
          {
            q: "How do I change the currency?",
            a: "Go to Settings > Currency Preference and select your preferred currency from the dropdown. All values across the app will update immediately.",
          },
          {
            q: "Can I have multiple users?",
            a: "Yes. Beyond personal accounts, Merchant Core offers an Organisation workspace where a Super Admin can add Admins, HRM and Finance managers, and staff — each logging in with the organisation name and their own credentials, with role-based access.",
          },
          {
            q: "What is the Marketplace in Merchant Core?",
            a: "The Marketplace is an in-app shopping hub where you can browse shops and their products, add items to a cart, and check out. Merchant Core also includes a billboard that plays short video adverts, plus tools to open your own shop and upload your POS products to it.",
          },
          {
            q: "Can I use a spreadsheet inside Merchant Core?",
            a: "Yes. The Spreadsheet workspace is an Excel-style editor with workbook autosave, Save/Ctrl+S, and import/export of .xlsx and .csv files. Every workbook has its own shareable deep link.",
          },
          {
            q: "Can a team run its business in Merchant Core?",
            a: "Yes. The Organisation workspace lets a whole team work on one account with clear roles: Super Admin, Admin, HRM Manager, Finance Manager, and Staff. Module access follows each role automatically.",
          },
          {
            q: "Can I manage payroll, attendance, and HR?",
            a: "Yes, within the Organisation workspace. HRM covers employees, payroll runs, time and attendance, performance reviews, and benefits administration. Every member can also check in with a self check-in attendance page.",
          },
          {
            q: "Can I create invoices and track tax?",
            a: "Yes. The Finance & Accounting tools include a general ledger, automated invoicing with draft/sent/paid/void states, tax obligations with due dates, and a real-time balance sheet.",
          },
          {
            q: "How do notifications work?",
            a: "Every sale, credit payment, invoice, payroll run, and employee check-in is emitted to an org-wide activity feed. The header bell shows an unread badge and a dropdown, and a dedicated Notifications page lists everything with the actor, amount, and time.",
          },
          {
            q: "What happens if I forget my password?",
            a: "Use the login form to enter your email. If you cannot access your account, a password reset flow will be available in a future release.",
          },
          {
            q: "Where is my data stored?",
            a: "All data is stored on the Merchant Core server and is associated with your account. A secure token keeps your session active while you use the app.",
          },
          {
            q: "How do stock levels update?",
            a: "When you complete a POS checkout, the stock quantities of the products in the cart are reduced automatically. Manual edits in the Inventory page also update stock immediately, and inventory changes sync through to your marketplace listings.",
          },
        ].map((item) => (
          <div key={item.q} className="guide-faq-item">
            <h3 className="guide-faq-q">{item.q}</h3>
            <p className="guide-faq-a">{item.a}</p>
          </div>
        ))}
      </Reveal>

      {/* ── Back link ────────────────────────────────────── */}
      <Reveal className="guide-section guide-back" whileInView={{ opacity: 1, y: 0 }}>
        <Link href="/" className="guide-back-link">
          ← Back to merchant-core-bay.vercel.app
        </Link>
      </Reveal>
    </section>
  );
};

export default Guide;
