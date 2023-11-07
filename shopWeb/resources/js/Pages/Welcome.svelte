<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    //import './app.scss'
    let user = "1";

    //自動輪播
    /*$('.carousel').carousel({
        interval: 2000,
        wrap:false
    })*/
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <script src="https://unpkg.com/@popperjs/core@2" ></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</svelte:head>

<div>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="header-logo">
                        <img alt="header-pic" style="width: 60%; height: 60%;" src="/img/logo.png" />
                    </div>
                </div>
                <div class="col-6">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="搜尋">
                        <button type="button" class="btn btn-primary"><i class="bi bi-search"></i></button>
                    </div>
                </div>
                <div class="col">
                    <div class="header-member">
                        {#if user != ""}
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img alt="header-member-pic" style="width: 30%; height: 30%;" src="/img/GitHub-Mark-ea2971cee799.png" />
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">會員中心</a></li>
                                    <li><a class="dropdown-item" href="#">我的收藏</a></li>
                                </ul>
                            </div>
                        {:else}
                            <div>
                                <button type="button" class="btn btn-primary">登入</button>
                                <button type="button" class="btn btn-primary">註冊</button>
                            </div>
                        {/if}
                    </div>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-outline-primary"><i class="bi bi-cart3"></i> 購物車</button>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div class="container carousel-background">
        <div class="carousel slide" id="ADcarousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#ADcarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#ADcarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#ADcarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/img/53584673_2376330595713162_8360521967605907456_o.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img src="/img/56518264_2535376079829056_8834093007352365056_o.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img src="/img/q52Ro6OakKWbqKQ.jpg" class="d-block w-100" alt="">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#ADcarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#ADcarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</div>

<style>
</style>

