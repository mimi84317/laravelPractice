# 在laravel上安裝svelte
## 安裝NodeJS
官網 : https://nodejs.org/en，由此下載
## 安裝inertia
官網 : https://inertiajs.com/
- 安裝composer
    ```bash=
    $ composer require inertiajs/inertia-laravel
    ```
- 改寫`/resources/views/welcome.blade.php`成`app.blade.php`或新增此檔案
    ```php=
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        @vite(['resources/js/app.js', 'resources/css/app.css'])
        @inertiaHead
      </head>
      <body>
        @inertia
      </body>
    </html>
    ```

- 新增middleware
    ```bash=
    $ php artisan inertia:middleware
    ```

- 在`/app/Http/Kernel.php`的web中新增`HandleInertiaRequests` middleware
```javascript=
'web' => [
	// ...
	\App\Http\Middleware\HandleInertiaRequests::class,
],
```

- 安裝`@inertiajs/svelte`
```bash=
$ npm install @inertiajs/svelte
```

- 改寫`/resources/js/app.js`
    ```javascript=
    //import './bootstrap';
    import { createInertiaApp } from '@inertiajs/svelte'

    createInertiaApp({
      resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true })
        return pages[`./Pages/${name}.svelte`]
      },
      setup({ el, App, props }) {
        new App({ target: el, props })
      },
    })
    ```

- 安裝svelte
    ```bash=
    $ npm install svelte@latest
    ```

- 安裝`@sveltejs/vite-plugin-svelte`
    官網 : https://www.npmjs.com/package/@sveltejs/vite-plugin-svelte
    ```bash=
        $ npm install @sveltejs/vite-plugin-svelte
    ```
    修改`vite.config.js`，import sveltejs
    ```javascript=
    import { defineConfig } from 'vite';
    import laravel from 'laravel-vite-plugin';
    import { svelte } from '@sveltejs/vite-plugin-svelte';

    export default defineConfig({
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
            svelte(),
        ],
    });
    ```

- 安裝bootstrap(非必要)
    官網 : https://getbootstrap.com/
    ```bash=
    $ npm i bootstrap@5.3.2
    ```
    `@`後面的數字依照版本不同更動

- 安裝sass(非必要)
    官網 : https://sass-lang.com/
    ```bash=
    $ npm install sass
    ```
    如果有安裝sass，`/resources/css/app.css`要改成`/resources/css/app.scss`，並在檔案中import bootstrap
    ```sass=
    @import 'node_modules/bootstrap/scss/bootstrap';
    ```
    `/resources/views/app.blade.php`中有引用css部分要改成scss
    ```php=
    <!DOCTYPE html>
    <html>
      <head>
        ...
        @vite(['resources/js/app.js', 'resources/css/app.scss'])
        ...
      </head>
      <body>
        @inertia
      </body>
    </html>
    ```
    `vite.config.js`中有引用css部分要改成scss
    ```javascript=
    import { defineConfig } from 'vite';
    import laravel from 'laravel-vite-plugin';
    import { svelte } from '@sveltejs/vite-plugin-svelte';

    export default defineConfig({
        plugins: [
            laravel({
                input: ['resources/css/app.scss', 'resources/js/app.js'],
                refresh: true,
            }),
            svelte(),
        ],
    });
    ```

- 在`/resources/js/`底下新增Pagees資料夾，並將svelte檔案存於此
    新增Welcome.svelte檔案，並寫一段簡單的svelte程式碼
    ```javascript=
    <script>
        let user = "User";
    </script>
    <p>hello { user }</p>
    <style>

    </style>
    ```

- 改寫/routes/web.php，新增use Inertia及改寫回傳頁面
    ```php=
    <?php

    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;

    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider and all of them will
    | be assigned to the "web" middleware group. Make something great!
    |
    */

    Route::get('/', function () {
        //return view('welcome');
        return Inertia::render('Welcome');
    });
    ```

## 執行
- 執行laravel
```bash=
$ php artisan serve
```

- 開啟svelte偵錯
```bash=
$ npm run dev
```
![](https://hackmd.io/_uploads/BJXdluYza.png)

## 參考資料
https://nodejs.org/en
https://inertiajs.com/
https://www.npmjs.com/package/@sveltejs/vite-plugin-svelte
https://getbootstrap.com/
https://sass-lang.com/
https://www.youtube.com/watch?v=K392jv16SeQ