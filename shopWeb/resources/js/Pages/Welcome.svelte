<script>
    import 'bootstrap/dist/css/bootstrap.min.css';

    import { Image } from 'sveltestrap';
    import { Col, Container, Row } from 'sveltestrap';
    import { Icon } from 'sveltestrap';
    import { Button } from 'sveltestrap';
    import {
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle
    } from 'sveltestrap';

    let user = "User";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
</svelte:head>

<div>
    <header>
        <Container>
            <Row>
                <Col>
                    <div class="header-logo">
                        <Image alt="header-pic" style="width: 60%; height: 60%;" src="/img/logo.png" />
                    </div>
                </Col>
                <Col>
                    <div class="header-member">
                        {#if user != ""}
                            <Dropdown>
                                <DropdownToggle tag="div" class="d-inline-block">
                                    <Image alt="header-pic" style="width: 10%; height: 10%;" src="/img/GitHub-Mark-ea2971cee799.png" />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>會員中心</DropdownItem>
                                    <DropdownItem>我的收藏</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                        {:else}
                            <button type="button" class="btn btn-outline-primary">登入</button>
                            <button type="button" class="btn btn-outline-primary">註冊</button>
                        {/if}
                    </div>
                </Col>
                <Col>
                    <Button outline color="primary"><Icon name="cart3" body color="info"/>購物車</Button>
                </Col>
            </Row>
        </Container>
    </header>

</div>

<style>

</style>

