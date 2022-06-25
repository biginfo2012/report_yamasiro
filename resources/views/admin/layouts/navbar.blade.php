<!-- BEGIN: Main Menu-->
<div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
            <li class="nav-item me-auto">
                <a class="navbar-brand" href="">
                    <span class="brand-logo">
                            <svg viewbox="0 0 139 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="24">
                                <defs>
                                    <lineargradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                                        <stop stop-color="#000000" offset="0%"></stop>
                                        <stop stop-color="#FFFFFF" offset="100%"></stop>
                                    </lineargradient>
                                    <lineargradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                                        <stop stop-color="#EEEEEE" stop-opacity="0" offset="0%"></stop>
                                        <stop stop-color="#FFFFFF" offset="100%"></stop>
                                    </lineargradient>
                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                                        <g id="Group" transform="translate(400.000000, 178.000000)">
                                            <path class="text-primary" id="Path" d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                                                  style="fill:currentColor"></path>
                                            <path id="Path1" d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#linearGradient-1)" opacity="0.2"></path>
                                            <polygon id="Path-2" fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"></polygon>
                                            <polygon id="Path-21" fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"></polygon>
                                            <polygon id="Path-3" fill="url(#linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                    </span>
                    <h2 class="brand-text">Vuexy</h2>
                </a>
            </li>
            <li class="nav-item nav-toggle">
                <a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse">
                    <i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i>
                    <i class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc"
                        data-ticon="disc"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="shadow-bottom"></div>
    @if(isset(\Illuminate\Support\Facades\Auth::user()->contract_type))
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class=" nav-item has-sub {{ str_contains(\Request::route()->getName(), 'work') ? 'sidebar-group-active open' : '' }}">
                    <a class="d-flex align-items-center" href="#">
                        <i data-feather="grid"></i><span class="menu-title text-truncate" data-i18n="Roles &amp; Permission">作業管理</span>
                    </a>
                    <ul class="menu-content">
                        <li class="{{ str_contains(\Request::route()->getName(), 'work-report') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'work-report-manager') ? '#' : route('master.work-report-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">作業日報管理</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    @else
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class="nav-item has-sub {{ str_contains(\Request::route()->getName(), 'person') ? 'sidebar-group-active open' : '' }}">
                    <a class="d-flex align-items-center" href="#">
                        <i data-feather="user"></i><span class="menu-title text-truncate" data-i18n="人事マスター">人事マスター</span>
                    </a>
                    <ul class="menu-content">
                        <li class="has-sub {{ str_contains(\Request::route()->getName(), 'admin') ? 'sidebar-group-active open' : '' }}">
                            <a class="d-flex align-items-center" href="#">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="管理者管理">管理者管理</span>
                            </a>
                            <ul class="menu-content">
                                <li class="{{ str_contains(\Request::route()->getName(), 'admin-add') ? 'active' : '' }}">
                                    <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'admin-add') ? '#' : route('master.person-admin-add')}}">
                                        <span class="menu-item text-truncate" data-i18n="Third Level">管理者追加</span>
                                    </a>
                                </li>
                                <li class="{{ str_contains(\Request::route()->getName(), 'admin-manager') ? 'active' : '' }}">
                                    <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'admin-manager') ? '#' : route('master.person-admin-manager')}}">
                                        <span class="menu-item text-truncate" data-i18n="Third Level">管理者一覧</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="has-sub {{ str_contains(\Request::route()->getName(), 'user') ? 'sidebar-group-active open' : '' }}">
                            <a class="d-flex align-items-center" href="#">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="ユーザー管理">ユーザー管理</span>
                            </a>
                            <ul class="menu-content">
                                <li class="{{ str_contains(\Request::route()->getName(), 'user-add') ? 'active' : '' }}">
                                    <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'user-add') ? '#' : route('master.person-user-add')}}">
                                        <span class="menu-item text-truncate" data-i18n="Third Level">ユーザー追加</span>
                                    </a>
                                </li>
                                <li class="{{ str_contains(\Request::route()->getName(), 'user-manager') ? 'active' : '' }}">
                                    <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'user-manager') ? '#' : route('master.person-user-manager')}}">
                                        <span class="menu-item text-truncate" data-i18n="Third Level">ユーザー一覧</span>
                                    </a>
                                </li>
                                <li class="{{ str_contains(\Request::route()->getName(), 'user-summary') ? 'active' : '' }}">
                                    <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'user-summary') ? '#' : route('master.person-user-summary')}}">
                                        <span class="menu-item text-truncate" data-i18n="Third Level">人事総括</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="has-sub {{ str_contains(\Request::route()->getName(), 'qualify') ? 'sidebar-group-active open' : '' }}">
                            <a class="d-flex align-items-center" href="#">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="ユーザー管理">資格マスター</span>
                            </a>
                            <ul class="menu-content">
                                <li class="{{ str_contains(\Request::route()->getName(), 'qualify-manager') ? 'active' : '' }}">
                                    <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'qualify-manager') ? '#' : route('master.person-qualify-manager')}}">
                                        <span class="menu-item text-truncate" data-i18n="Third Level">資格一覧</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item has-sub {{ str_contains(\Request::route()->getName(), 'office') ? 'sidebar-group-active open' : '' }}">
                    <a class="d-flex align-items-center" href="#">
                        <i data-feather="shield"></i><span class="menu-title text-truncate" data-i18n="Roles &amp; Permission">営業所マスター</span>
                    </a>
                    <ul class="menu-content">
                        <li class="{{ str_contains(\Request::route()->getName(), 'office-manage') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'office-manage') ? '#' : route('master.office-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">営業所一覧</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item has-sub {{ str_contains(\Request::route()->getName(), 'team') ? 'sidebar-group-active open' : '' }}">
                    <a class="d-flex align-items-center" href="#">
                        <i data-feather="file-text"></i><span class="menu-title text-truncate" data-i18n="Roles &amp; Permission">班マスター</span>
                    </a>
                    <ul class="menu-content">
                        <li class="{{ str_contains(\Request::route()->getName(), 'team-manage') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'team-manage') ? '#' : route('master.team-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">班一覧</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item has-sub {{ str_contains(\Request::route()->getName(), 'company') ? 'sidebar-group-active open' : '' }}">
                    <a class="d-flex align-items-center" href="#">
                        <i data-feather="briefcase"></i><span class="menu-title text-truncate" data-i18n="Roles &amp; Permission">請求会社マスター</span>
                    </a>
                    <ul class="menu-content">
                        <li class="{{ str_contains(\Request::route()->getName(), 'company-manage') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'company-manage') ? '#' : route('master.company-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">請求会社一覧</span>
                            </a>
                        </li>
                        <li class="{{ str_contains(\Request::route()->getName(), 'invoice-manage') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'invoice-manage') ? '#' : route('master.invoice-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">請求書</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item has-sub {{ str_contains(\Request::route()->getName(), 'site') ? 'sidebar-group-active open' : '' }}">
                    <a class="d-flex align-items-center" href="#">
                        <i data-feather="briefcase"></i><span class="menu-title text-truncate" data-i18n="Roles &amp; Permission">現場マスター</span>
                    </a>
                    <ul class="menu-content">
                        <li class="{{ str_contains(\Request::route()->getName(), 'site-add') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'site-add') ? '#' : route('master.site-add')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Roles">現場追加</span>
                            </a>
                        </li>
                        <li class="{{ str_contains(\Request::route()->getName(), 'site-manage') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'site-manage') ? '#' : route('master.site-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">現場一覧</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item has-sub {{ str_contains(\Request::route()->getName(), 'pay') ? 'sidebar-group-active open' : '' }}">
                    <a class="d-flex align-items-center" href="#">
                        <i data-feather="credit-card"></i><span class="menu-title text-truncate" data-i18n="Roles &amp; Permission">前払いマスター</span>
                    </a>
                    <ul class="menu-content">
                        <li class="{{ str_contains(\Request::route()->getName(), 'pay-request') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'pay-request-manager') ? '#' : route('master.pay-request-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">前払申請一覧</span>
                            </a>
                        </li>
                        <li class="{{ str_contains(\Request::route()->getName(), 'pay-sum-manager') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'pay-sum-manager') ? '#' : route('master.pay-sum-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Roles">前払総括</span>
                            </a>
                        </li>
                        <li class="{{ str_contains(\Request::route()->getName(), 'pay-sum-person') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'pay-sum-person') ? '#' : route('master.pay-sum-person')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">前払い一覧(個人別)</span>
                            </a>
                        </li>
                        <li class="{{ str_contains(\Request::route()->getName(), 'pay-sum-month') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'pay-sum-month') ? '#' : route('master.pay-sum-month')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">前払い一覧(月別)</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item has-sub {{ str_contains(\Request::route()->getName(), 'work') ? 'sidebar-group-active open' : '' }}">
                    <a class="d-flex align-items-center" href="#">
                        <i data-feather="grid"></i><span class="menu-title text-truncate" data-i18n="Roles &amp; Permission">作業管理</span>
                    </a>
                    <ul class="menu-content">
                        <li class="{{ str_contains(\Request::route()->getName(), 'work-shift') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'work-shift-manager') ? '#' : route('master.work-shift-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Roles">勤怠管理</span>
                            </a>
                        </li>
                        <li class="{{ str_contains(\Request::route()->getName(), 'work-report') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'work-report-manager') ? '#' : route('master.work-report-manager')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Permission">作業日報管理</span>
                            </a>
                        </li>
                        <li class="{{ str_contains(\Request::route()->getName(), 'work-total') ? 'active' : '' }}">
                            <a class="d-flex align-items-center" href="{{str_contains(\Request::route()->getName(), 'work-total-shift') ? '#' : route('master.work-total-shift')}}">
                                <i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Roles">労務者総括</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    @endif

</div>
<!-- END: Main Menu-->
