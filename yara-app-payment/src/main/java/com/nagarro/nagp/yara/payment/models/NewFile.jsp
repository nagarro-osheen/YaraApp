<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="template" tagdir="/WEB-INF/tags/responsive/template"%>
<%@ taglib prefix="theme" tagdir="/WEB-INF/tags/shared/theme"%>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="format" tagdir="/WEB-INF/tags/shared/format"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="product" tagdir="/WEB-INF/tags/responsive/product"%>
<%@ taglib prefix="order" tagdir="/WEB-INF/tags/responsive/orderStatus"%>
<%@ taglib prefix="account" tagdir="/WEB-INF/tags/responsive/account"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="returnExchange"
	tagdir="/WEB-INF/tags/responsive/returnExchange"%>
<c:url value="/my-account/order-history" var="ordersUrl" />
<c:url value="/my-account/order/${orderData.code}/cancelItem"
	var="cancelUrl" />
<c:url
	value="/my-account/update-profile?type=updateprofile#my-acc-section"
	var="profileUpdate" />
<c:url value="/orders/orderDetails/" var="orderDetailsUrl" />
<c:url value="/userServices/trackOrder" var="trackUrl"></c:url>
<c:set var="isPickupOrder" value="${orderData.orderType eq 'PICK'}" />
<spring:eval
	expression="T(de.hybris.platform.util.Config).getParameter('sslreturns.nomobilenumber.errormessage')"
	var="noMobileNumberMsg" scope="page" />

<!-- Write a Review Popup Div End -->
<template:page pageTitle="${pageTitle}">


	<div id="overlayDiv" class="overlay"></div>
	<div id="spinnerOverlay" class="overlay" style="z-index: 100;">
		<div class="spinner">
			<div class="rect1"></div>
			<div class="rect2"></div>
			<div class="rect3"></div>
			<div class="rect4"></div>
			<div class="rect5"></div>
		</div>
	</div>

	<div class="member-login" id="member-login" style="max-height: 140px;">
		<div id="member-wrapper">
			<div id="member-scroller">
				<span class="loginclose"></span>
				<div class="member-login-wrap" id="member-login-wrap">
					<span>${noMobileNumberMsg} <a href="${profileUpdate}"
						style="text-decoration: underline;">Profile</a></span>
				</div>
			</div>
		</div>
	</div>

	<div class="modal custom-modal fade return-exchange-items"
		id="return-exchange-items_v1">
		<div class="modal-dialog" role="document">
			<div class="modal-content" id="return-modal-class"></div>
		</div>
	</div>
	<div class="modal custom-modal fade cancel-items" id="cancel-items_v1">
		<div class="modal-dialog" role="document">
			<div class="modal-content" id="cancel-modal-class"></div>
		</div>
	</div>

	<!-- Write a Review Popup Div Start -->
	<product:productWriteReview product="${product}"
		orderCode="${orderData.code}" hideErrorMessage="true" />

	<input type="hidden" id="exchangeBaseUrlId"
		class="exchangeBaseUrlClass" value="${exchangeBaseUrl}"></input>
	<input type="hidden" id="tab" class="tab" value="${tab}"></input>
	<c:set value="${user.firstName}" var="loggedinUserId" />
	<section class="my-account-wpr order-detail-page">

		<!-- for testing -->
		<%-- <div class="exchange_popup">

            <a href="#" data-toggle="modal" data-target="#return-exchange-items_v1" class="return-exchange-items_v1">Return/Exchange Items 2</a>
                            <input type="hidden" class ="orderCodeVal" value ="${orderData.code}" />

                    <input type="hidden" class ="entryNumberVal" value ="${entry.entryNumber}" />
            </div> --%>
		<!-- testing end -->
		<div class="container container-responsive">
			<div class="row">

				<input type="hidden" class="returnRequestWsListDTO"
					value="${returnRequestWsListDTO}" id="returnRequestWsListDTOId"></input>
				<div class="col-lg-12">
					<div class="detail-page clearfix">
						<h2>
							<a href="${ordersUrl}"><spring:theme
									code="text.myShoppers.orderDetails" text="Order details" /></a>
						</h2>
					</div>
				</div>
				<div class="myorder-div">
					<span></span>
				</div>

				<c:choose>
					<c:when test="${not isReload}">

						<div class="col-md-9 col-lg-9 my-acc-main">
							<div class="content-wpr">
								<div class="order-heading">


									<h2>
										<spring:theme code="text.myShoppers.orders.orderSummary"></spring:theme>
										<span>(${orderData.totalItems}&nbsp;items)</span>
									</h2>
								</div>
								<div class="order-summ-wpr">
									<div class="order-info">
										<ul>
											<li><label class="odr-lbl"><spring:theme
														code="text.myShoppers.orders.orderId"></spring:theme></label>
												<div class="odr-data">${orderData.code}</div></li>
											<li><label class="odr-lbl"><spring:theme
														code="text.myShoppers.orders.orderData"></spring:theme></label>
												<div class="odr-data">
													<fmt:formatDate value="${orderData.created}"
														dateStyle="long" timeStyle="long" type="both"
														pattern="EEEE, MMMM dd, yyyy" />
												</div></li>
											<li><label class="odr-lbl"><spring:theme
														code="text.myShoppers.orders.totalDiscount"></spring:theme></label>
												<div class="odr-data">
													<c:choose>
														<c:when
															test="${orderData.totalDiscounts.formattedValue eq null}">NA</c:when>
														<c:otherwise>
																${orderData.totalDiscounts.formattedValue}
														</c:otherwise>
													</c:choose>
												</div></li>
											<li><label class="odr-lbl"><spring:theme
														code="text.myShoppers.orders.shippingCharges"></spring:theme></label>
												<div class="odr-data">
													<c:choose>
														<c:when
															test="${orderData.deliveryCost.formattedValue eq null}">NA</c:when>
														<c:otherwise>
																${orderData.deliveryCost.formattedValue}
														</c:otherwise>
													</c:choose>
												</div></li>

											<li><label class="odr-lbl"><spring:theme
														code="text.myShoppers.orders.amountPaid"></spring:theme></label>
												<div class="odr-data">

													<c:if test="${not empty orderData._paymentTransactions}">
														<c:forEach items="${orderData._paymentTransactions}"
															var="paymentMode" varStatus="status">
															<span>&nbsp;through <strong> <c:out
																		value="${paymentMode.typeOfPayment}" /> <c:if
																		test="${!status.last}">,</c:if>
														</c:forEach>
														</strong>
														</span>
													</c:if>
													<!-- <c:if test="${not empty orderData.paymentInfo}">
												<span>&nbsp;through <strong>${orderData.paymentInfo.cardType}</strong></span>
											</c:if> -->
												</div></li>
											<li><label class="odr-lbl"><spring:theme
														code="text.myShoppers.orders.amountRefunded"></spring:theme></label>
												<div class="odr-data">
													<c:choose>
														<c:when
															test="${orderData.deliveryCost.formattedValue eq null}">NA</c:when>
														<c:otherwise>
																${orderData.deliveryCost.formattedValue}
														</c:otherwise>
													</c:choose>
												</div></li>
											<li><label class="odr-lbl"><spring:theme
														code="text.myShoppers.orders.totalRefund"></spring:theme></label>
												<div class="odr-data">
													<c:choose>
														<c:when
															test="${orderData.deliveryCost.formattedValue eq null}">NA</c:when>
														<c:otherwise>
																${orderData.deliveryCost.formattedValue}
														</c:otherwise>
													</c:choose>
												</div></li>
											<li><label class="odr-lbl"><spring:theme
														code="text.myShoppers.orders.deliveryType"></spring:theme></label>
												<div class="odr-data">
													<c:choose>
														<c:when
															test="${orderData.deliveryCost.formattedValue eq null}">NA</c:when>
														<c:otherwise>
																${orderData.deliveryCost.formattedValue}
														</c:otherwise>
													</c:choose>
												</div></li>
											<c:choose>
												<c:when test="${not isPickupOrder}">

													<li><label class="odr-lbl"><spring:theme
																code="text.myShoppers.orders.deliveryAddress"></spring:theme></label>
														<div class="odr-data">
															${orderData.deliveryAddress.firstName}&nbsp;${orderData.deliveryAddress.lastName}
															<span>
																${fn:escapeXml(orderData.deliveryAddress.line1)}, <c:if
																	test="${not empty fn:escapeXml(orderData.deliveryAddress.line2)}">
                                                                ${fn:escapeXml(address.line2)},
                                                            </c:if>
																${fn:escapeXml(orderData.deliveryAddress.town)} <br>Mobile:
																${fn:escapeXml(orderData.deliveryAddress.phone)}
															</span>
														</div></li>
												</c:when>
												<c:otherwise>
													<li><label class="odr-lbl"><spring:theme
																code="text.myShoppers.orders.pickupAddress"></spring:theme></label>
														<div class="odr-data" style="float: none;">
															${orderData.pickupAddress.firstName}&nbsp;${orderData.pickupAddress.lastName}
															<span>
																${fn:escapeXml(orderData.pickupAddress.line1)}, <c:if
																	test="${not empty fn:escapeXml(orderData.pickupAddress.line2)}">
                                                                ${fn:escapeXml(address.line2)},
                                                            </c:if>
																${fn:escapeXml(orderData.pickupAddress.town)} <c:if
																	test="${not empty fn:escapeXml(orderData.pickupAddress.phone)}">
																	<br>Mobile:
                                                                    ${fn:escapeXml(orderData.pickupAddress.phone)}
                                                                </c:if>
															</span>
														</div></li>
													<li><label class="odr-lbl"><spring:theme
																code="text.myShoppers.orders.pickupPersonName"></spring:theme></label>
														<div class="odr-data">${orderData.pickupPersonName}
														</div></li>
													<li><label class="odr-lbl"><spring:theme
																code="text.myShoppers.orders.pickupPersonContact"></spring:theme></label>
														<div class="odr-data">
															${orderData.pickupPersonContact}</div></li>
													<c:if
														test="${not empty fn:escapeXml(orderData.storePickupTimings)}">
														<li><label class="odr-lbl"><spring:theme
																	code="text.myShoppers.orders.storePickupTimings"></spring:theme></label>
															<div class="odr-data">

																${orderData.storePickupTimings}</div></li>
													</c:if>
												</c:otherwise>
											</c:choose>
										</ul>
									</div>
									<!-- TODO : Gift Card Section -->

									<!--  <div class="gift-card-wpr">
                                        <a href=""> <picture>
                                            <source media="(min-width: 1024px)"
                                                srcset="assets/images/gift-order-img.jpg">
                                            <source media="(min-width: 320px)"
                                                srcset="assets/images/gift-order-img-mobile.jpg">
                                            <img src="assets/images/gift-order-img.jpg" alt=""> </picture>
                                        </a> <a href=""><h2>This is Gift Order</h2></a>

                                    </div> -->
								</div>

								<!-- TODO : Order Tracking Section (can be done when once Order Fullfill Process completed) -->

								<%-- <order:orderTracking orderData="${orderData}" /> --%>


								<div class="order-heading order_cancel_section">
									<div class="cancel_heading_div">
										<h2 class="cancel_h2_tag">
											<spring:theme code="text.myShoppers.orders.orderDetail"></spring:theme>
										</h2>
									</div>
									<c:if
										test="${(loggedinUserId ne 'Anonymous') && (isFullCancelPossible)}">

										<div class="btn-block cancel_btn_div">
											<button type="button" id="initiateCancel" class="btn"
												index="${orderData.code}">
												Cancel</button>

										</div>
									</c:if>





								</div>
								<c:set var="index" value="0" />
								<div class="cart-product">
									<ul class="shop-listing">
										<c:set var="count" value="1" />
										<c:forEach items="${orderData.consignments}"
											var="consignments">
											<c:if test="${consignments.isOrderConsignment}">
												<c:forEach items="${consignments.entries}"
													var="consignmententry">
													<%-- <input type="hidden" class="consignmentCodeVal" id ="${count}consignmentCodeVal" value ="${consignments.code}" /> --%>
													<c:set value="${consignmententry.orderEntry}" var="entry" />
													<c:set value="${consignmententry.uniqueId}" var="uniqueId" />

													<input type="hidden" class="consignmentCodeVal"
														id="${consignments.code}${entry.entryNumber}consignmentCodeVal"
														value="${consignments.code}" />
													<input type="hidden" class="consignmentEntryPK"
														id="${consignments.code}${entry.entryNumber}${uniqueId}consignmentEntryPK"
														value="${uniqueId}" />

													<c:set value="${consignmententry.rma}"
														var="consignmententryRMA" />
													<!-- jgd -->
													<c:set
														value="${entry.entryStatus eq 'CANCELLED' || entry.entryStatus eq 'CANCELING' || entry.entryStatus eq 'DEAD'}"
														var="orderEntryStatus" />
													<c:set
														value="${consignments.status eq 'CANCELLED' || consignments.status eq 'CANCELING'}"
														var="consignmentStatus" />
													<c:set
														value="${entry.entryStatus eq 'PARTIALLY_CANCELLED' || entry.entryStatus eq 'PARTIALLY_CANCELING'}"
														var="orderEntryPartialStatus" />
													<c:set
														value="${entry.cancelledQty  gt 0 && entry.cancelledQty le entry.quantity}"
														var="orderEntryPartialQuantityStatus"></c:set>
													<c:set
														value="${(entry.cancelledQty  gt 0) && (entry.cancelledQty eq entry.quantity) && ((consignmententry.status eq 'CANCELLED' && consignmententry.quantity eq consignmententry.allocatedQuantity) || consignmententry.isInternalConsignmentCancelled)}"
														var="orderPartialQuantityFullEntryStatus"></c:set>
													<input type="hidden" class="entryNumberVal"
														value="${entry.entryNumber}" />
													<c:if
														test="${(consignmententry.status ne 'CANCELLED' || (consignmententry.status eq 'CANCELLED' && orderEntryStatus)) && (!(orderEntryPartialStatus && orderEntryPartialQuantityStatus))}">
														<c:set value="${entry.product}" var="product" />

														<li>

															<div class="pro-img">
																<product:productPrimaryImage product="${product}"
																	format="thumbnail" />
															</div>
															<div class="pro-info-shop">
																<div class="mat-name">${product.brandCode}</div>
																<div class="pro-name">
																	<a href="${product.url}">${product.name}</a>
																</div>
																<ul>
																	<c:set
																		value="${product.baseOptions[0].selected.variantOptionQualifiers[0]}"
																		var="productVariant1" />
																	<c:set
																		value="${product.baseOptions[0].selected.variantOptionQualifiers[1]}"
																		var="productVariant2" />

																	<c:choose>

																		<c:when
																			test="${(productVariant1.qualifier eq 'style') && (productVariant2.qualifier eq 'size')}">
																			<c:set var="styleVariant" value="${productVariant1}" />
																			<c:set var="sizeVariant" value="${productVariant2}" />
																		</c:when>

																		<c:when
																			test="${(productVariant1.qualifier eq 'size') && (productVariant2.qualifier eq 'style')}">
																			<c:set var="sizeVariant" value="${productVariant1}" />
																			<c:set var="styleVariant" value="${productVariant2}" />
																		</c:when>

																	</c:choose>


																	<li><span class="lbl-bag"><spring:theme
																				code="product.variants.colour"></spring:theme></span><span>
																			${styleVariant.value} </span></li>
																	<li><span class="lbl-bag"><spring:theme
																				code="product.variants.size"></spring:theme></span> <span>
																			${sizeVariant.value}</span></li>

																	<li><span class="lbl-bag"><spring:theme
																				code="product.volumePrices.column.qa"></spring:theme></span><span>
																			${consignmententry.quantity} </span></li>
																</ul>
																<div class="prod-price hidden-xs hidden-sm"
																	style="float: left;">
																	<format:orderEntryPriceOrderDetails entry="${entry}"
																		product="${product}" />
																</div>
																<div class="prod-price mobile-price hidden-md hidden-lg"
																	style="float: left;">
																	<format:fromPrice product="${product}" />

																</div>
																<div class="clearfix"></div>
															</div>
															<div
																class="desktop-delivary-time mobile-delivary  hidden-md hidden-lg">
																<c:choose>
																	<c:when
																		test="${(not orderEntryStatus) && (not consignmentStatus)}">

																		<c:if
																			test="${(consignments.trackingStatus ne 'DELIVERED')&&(not isPickupOrder)&&(consignments.trackingStatus ne 'DELIVERY_FAILED')&&(consignments.trackingStatus ne 'RETURN_TO_VENDOR')}">
																			<div class="delivary-time">
																				<em> <order:orderEntryStatus
																						orderEntryStatus="${entry.entryStatus}" />
																				</em> ${entry.product.shippingInfo}
																				<c:if
																					test="${not empty orderData.deliveryMode.description}">
                                                                                    ${orderData.deliveryMode.description}
                                                                                </c:if>
																			</div>
																		</c:if>
																		<c:if
																			test="${consignments.trackingStatus eq 'DELIVERED'}">
																			<div class="delivary-time">
																				<em>COMPLETED</em>
																			</div>
																		</c:if>
																		<c:if test="${isPickupOrder}">
																			<div class="delivary-time">
																				<em>${entry.entryStatus}</em>
																			</div>
																		</c:if>
																		<div>
																			<c:if
																				test="${(consignments.trackingStatus eq 'DELIVERY_FAILED')&&(consignmententry.consignmentStatus eq 'DELIVERY_FAILED')}">
																				<span class="order-item-cancelled">DELIVERY
																					FAILED</span>
																			</c:if>
																			<c:if
																				test="${(consignments.trackingStatus eq 'DELIVERY_FAILED')&&(consignmententry.consignmentStatus eq 'RETURN_TO_VENDOR')}">
																				<span class="order-item-cancelled">CANCELLED</span>
																			</c:if>
																		</div>
																	</c:when>
																	<c:otherwise>
																		<span class="order-item-cancelled">CANCELLED</span>
																	</c:otherwise>
																</c:choose>
															</div>
															<div class="return-track-action">
																<div class="exchange_popup user-fdb-container">
																	<c:if test="${(not empty consignmententryRMA)}">
																		<button type="button" id="trackReturn" class="btn"
																			index="${consignments.code}${entry.entryNumber}">
																			Track Return & Exchange</button>
																		<input type="hidden"
																			id="${consignments.code}${entry.entryNumber}consignmententryRMA"
																			class="consignmententryRMA"
																			value="${consignmententryRMA}" />
																		<input type="hidden"
																			id="${consignments.code}${entry.entryNumber}orderCodeVal"
																			class="orderCodeVal" value="${orderData.code}" />
																	</c:if>
																	<c:if
																		test="${((not isPickupOrder) && (consignmententry.consignmentStatus eq 'COMPLETE') || (consignmententry.consignmentStatus eq 'DELIVERED')) || ((isPickupOrder) && (consignmententry.consignmentStatus eq 'PICKED') || (consignmententry.consignmentStatus eq 'COMPLETED'))}">
																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (hasReturnExchangePrivilege) && !(consignmententry.returnEligible) && ((consignmententry.reason) ne null)}">
																			<div class="btn-block">
																				<div class="infoTooltip">
																					<span><img
																						src="/_ui/responsive/common/assets/images/infoIcon.png"
																						title="" alt="" /></span>
																					<div class="arrow_box">${consignmententry.reason}</div>
																				</div>
																				<button type="button" class="btn"
																					index="${consignments.code}${entry.entryNumber}"
																					disabled>Return or Exchange</button>
																				<input type="hidden" id="exchangeBaseUrlId"
																					class="exchangeBaseUrlClass"
																					value="${consignmententry.reason}"></input>
																			</div>
																			<input type="hidden"
																				id="${consignments.code}${entry.entryNumber}orderCodeVal"
																				class="orderCodeVal" value="${orderData.code}" />
																			<input type="hidden"
																				id="${consignments.code}${entry.entryNumber}entryNumberVal"
																				class="entryNumberVal" value="${entry.entryNumber}" />
																			<c:set var="count" value="${count +1}" />

																		</c:if>

																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (hasReturnExchangePrivilege) && (consignmententry.returnEligible)}">


																			<div class="btn-block">
																				<!-- <a href="#" data-toggle="modal" data-target="#return-exchange-items_v1" class="return-exchange-items_v1"> -->
																				<button type="button" id="initiateReturn"
																					class="btn <c:if test="${not hasMobileNo}">no-mobile</c:if>"
																					uniqueId="${uniqueId}"
																					index="${consignments.code}${entry.entryNumber}"
																					shipnode="${consignments.shipNode}">
																					Return or Exchange</button>
																				</a>
																			</div>
																			<input type="hidden"
																				id="${consignments.code}${entry.entryNumber}orderCodeVal"
																				class="orderCodeVal" value="${orderData.code}" />
																			<input type="hidden"
																				id="${consignments.code}${entry.entryNumber}entryNumberVal"
																				class="entryNumberVal" value="${entry.entryNumber}" />
																			<c:set var="count" value="${count +1}" />

																		</c:if>
																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (consignmententry.status ne 'CANCELLED')}">
																			<div class="btn-block">

																				<p>
																					<a href="#write_review"
																						class="bg-white zoom_writeReview"
																						data-hasReturnPrivilege="${hasReturnExchangePrivilege}"
																						data-action="/orders/p-${product.code}/writeReview">Write
																						a product review</a>
																				</p>
																			</div>

																		</c:if>
																		<c:if
																			test="${not empty existingFeedbackForUserAndScope}">
																			<c:set var="isFeedbackExist" value="" />
																			<c:forEach items="${existingFeedbackForUserAndScope}"
																				var="feedback">
																				<c:if
																					test="${(feedback.productCode eq product.code) && (feedback.consignmentCode eq consignments.code)}">
																					<c:set var="isFeedbackExist" value="exist" />
																				</c:if>
																			</c:forEach>
																		</c:if>
																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (not isPickupOrder) && not empty feedbackAndRatingData}">
																			<div class="btn-block">
																				<c:choose>
																					<c:when test="${not empty isFeedbackExist}">
																						<c:set var="deliveryCSS" value="bg-white disabled" />
																					</c:when>
																					<c:otherwise>
																						<c:set var="deliveryCSS" value="bg-white" />
																					</c:otherwise>
																				</c:choose>
																				<p>
																					<a
																						id='deliveryBtn${product.code}${consignments.code}'
																						<c:if
                                                                                                test="${empty isFeedbackExist}"> href="#write_review"</c:if>
																						class="${deliveryCSS}"
																						onclick="showFeedbackPop(0,'${isFeedbackExist}',1,'${consignments.code}','${product.code}');">write
																						a delivery review</a>
																				</p>
																			</div>
																		</c:if>
																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (hasReturnExchangePrivilege) && (consignmententry.returnEligible) && (consignmententry.consignmentStatus eq 'Picked')}">
																			<div class="btn-block">
																				<spring:theme
																					code="text.myShoppers.pickuporder.returnExchange" />
																			</div>

																		</c:if>
																	</c:if>
																</div>
															</div>
															<div class="clearfix"></div>
															<div class="desktop-delivary-time  hidden-xs hidden-sm">
																<c:choose>
																	<c:when
																		test="${(not orderEntryStatus) && (not consignmentStatus)}">

																		<c:if
																			test="${(consignments.trackingStatus ne 'DELIVERED')&&(not isPickupOrder)&&(consignments.trackingStatus ne 'DELIVERY_FAILED')&&(consignments.trackingStatus ne 'RETURN_TO_VENDOR')}">
																			<div class="delivary-time">
																				<em> <order:orderEntryStatus
																						orderEntryStatus="${entry.entryStatus}" />
																				</em> ${entry.product.shippingInfo}
																				<c:if
																					test="${not empty orderData.deliveryMode.description}">
                                                                                    ${orderData.deliveryMode.description}
                                                                                </c:if>
																			</div>
																		</c:if>
																		<c:if
																			test="${consignments.trackingStatus eq 'DELIVERED'}">
																			<div class="delivary-time">
																				<em>COMPLETED</em>
																			</div>
																		</c:if>
																		<c:if test="${isPickupOrder}">
																			<div class="delivary-time">
																				<em>${entry.entryStatus}</em>
																			</div>
																		</c:if>
																		<div>
																			<c:if
																				test="${(consignments.trackingStatus eq 'DELIVERY_FAILED')&&(consignmententry.consignmentStatus eq 'DELIVERY_FAILED')}">
																				<span class="order-item-cancelled">DELIVERY
																					FAILED</span>
																			</c:if>
																			<c:if
																				test="${(consignments.trackingStatus eq 'DELIVERY_FAILED')&&(consignmententry.consignmentStatus eq 'RETURN_TO_VENDOR')}">
																				<span class="order-item-cancelled">CANCELLED</span>
																			</c:if>
																		</div>
																	</c:when>
																	<c:otherwise>
																		<span class="order-item-cancelled">CANCELLED</span>
																	</c:otherwise>
																</c:choose>
															</div>

															<div class="clearfix text-danger outOfStockError"
																id="${consignments.code}-${entry.entryNumber}-${uniqueId}"
																style="display: none;">Some products are out of
																stock. Please reduce quantity and make your exchange
																selections</div> <!-- 	TODO : Cancel Button Functionality -->
															<%-- <c:if test="${orderData.status eq 'WAIT_FOR_CANCEL'}">
										<a  href="${cancelUrl}?cancelItemCode=${entry.product.code}" >Cancel</a>
										</c:if> --%> <%-- <c:if
													test="${orderData.status eq 'COMPLETED' and (not orderEntryStatus) && (not consignmentStatus)}">
													<a class="cancel-btn-macc" href="javascript:void(0)"
														data-index="${index}">ReturnItem</a>
													<div class="order_return_item"
														id="order_return_item${index}">Please contact
														customer service for return.</div>
													<account:returnItem product="${product}" index="${index }"
														cancelUrl="${cancelUrl}" />
												</c:if> --%>
															<div class="clearfix"></div> <c:if
																test="${(not orderEntryStatus) && (not consignmentStatus) && (consignmententry.consignmentStatus ne 'CANCELLED') && (consignmententry.consignmentStatus ne 'RETURN_TO_VENDOR')}">
																<c:choose>
																	<c:when test="${not isPickupOrder}">
																		<order:consignmentTracking
																			orderDate="${orderData.created}"
																			consignment="${consignments}" />
																	</c:when>
																	<c:otherwise>
																		<order:pickupOrderConsignmentSatus
																			orderDate="${orderData.created}"
																			consignment="${consignments}" />
																	</c:otherwise>
																</c:choose>
															</c:if>
														</li>
														<c:set var="index" value="${index+1}" />
													</c:if>
													<c:if
														test="${(orderEntryPartialStatus && orderEntryPartialQuantityStatus)}">

														<c:if test="${(consignmententry.status ne 'CANCELLED')}">

															<c:set value="${entry.product}" var="product" />
															<li>
																<div class="ex-checkbox"
																	id="${consignments.code}${entry.entryNumber}${uniqueId}"
																	style="display: none;">
																	<input type="checkbox" class="checkboxClass"
																		id="${consignments.code}${entry.entryNumber}${uniqueId}checkbox"
																		value="${consignments.code}--${entry.entryNumber}__${uniqueId}">
																	<label for="checkbox"></label>
																</div>
																<div class="pro-img">
																	<product:productPrimaryImage product="${product}"
																		format="thumbnail" />
																</div>
																<div class="pro-info-shop">
																	<div class="mat-name">${product.brandCode}</div>
																	<div class="pro-name">
																		<a href="${product.url}">${product.name}</a>
																	</div>
																	<ul>
																		<c:set
																			value="${product.baseOptions[0].selected.variantOptionQualifiers[0]}"
																			var="productVariant1" />
																		<c:set
																			value="${product.baseOptions[0].selected.variantOptionQualifiers[1]}"
																			var="productVariant2" />

																		<c:choose>

																			<c:when
																				test="${(productVariant1.qualifier eq 'style') && (productVariant2.qualifier eq 'size')}">
																				<c:set var="styleVariant" value="${productVariant1}" />
																				<c:set var="sizeVariant" value="${productVariant2}" />
																			</c:when>

																			<c:when
																				test="${(productVariant1.qualifier eq 'size') && (productVariant2.qualifier eq 'style')}">
																				<c:set var="sizeVariant" value="${productVariant1}" />
																				<c:set var="styleVariant" value="${productVariant2}" />
																			</c:when>

																		</c:choose>


																		<li><span class="lbl-bag"><spring:theme
																					code="product.variants.colour"></spring:theme></span><span>
																				${styleVariant.value} </span></li>
																		<li><span class="lbl-bag"><spring:theme
																					code="product.variants.size"></spring:theme></span> <span>
																				${sizeVariant.value}</span></li>

																		<li><span class="lbl-bag"><spring:theme
																					code="product.volumePrices.column.qa"></spring:theme></span><span>
																				${consignmententry.consignmentAllocatedQuantity}</span></li>
																	</ul>
																	<div
																		class="prod-price mobile-price hidden-md hidden-lg">
																		<format:fromPrice product="${product}" />
																	</div>
																	<div class="desktop-delivary-time  hidden-xs hidden-sm">
																		<c:choose>
																			<c:when
																				test="${(not orderEntryStatus) && (not consignmentStatus)}">
																				<div class="delivary-time">
																					<em> <order:orderEntryStatus
																							orderEntryStatus="${entry.entryStatus}" />
																					</em> ${entry.product.shippingInfo}
																					<c:if
																						test="${not empty orderData.deliveryMode.description}">
                                                                                        ${orderData.deliveryMode.description}
                                                                                    </c:if>
																				</div>
																			</c:when>
																			<c:otherwise>
																				<span class="order-item-cancelled">CANCELLED</span>
																			</c:otherwise>
																		</c:choose>
																	</div>
																</div>
																<div
																	class="desktop-delivary-time mobile-delivary  hidden-md hidden-lg">
																	<c:choose>
																		<c:when
																			test="${(not orderEntryStatus) && (not consignmentStatus)}">
																			<div class="delivary-time">
																				<em> <order:orderEntryStatus
																						orderEntryStatus="${entry.entryStatus}" />.
																				</em> ${entry.product.shippingInfo}
																				<c:if
																					test="${not empty orderData.deliveryMode.description}">
                                                                                    ${orderData.deliveryMode.description}
                                                                                </c:if>
																			</div>
																		</c:when>
																		<c:otherwise>
																			<span class="order-item-cancelled">CANCELLED</span>
																		</c:otherwise>
																	</c:choose>
																</div>
																<div class="return-track-action">
																	<div class="prod-price hidden-xs hidden-sm btn-block">
																		<format:orderEntryPrice product="${product}"
																			priceData="${entry.basePrice}" />
																	</div>


																	<div class="exchange_popup user-fdb-container">
																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && ((consignmententry.consignmentStatus eq 'COMPLETE') || (consignmententry.consignmentStatus eq 'Picked'))}">
																			<div class="btn-block">

																				<p>
																					<a href="#write_review"
																						class="zoom_writeReview bttn cancel-button btn-block"
																						data-hasReturnPrivilege="${hasReturnExchangePrivilege}"
																						data-action="/orders/p-${product.code}/writeReview">Write
																						a product review</a>
																				</p>
																			</div>
																		</c:if>

																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (hasReturnExchangePrivilege) && (consignmententry.returnEligible) && (consignmententry.consignmentStatus eq 'COMPLETE')}">
																			<div class="btn-block">
																				<!-- <a href="#" data-toggle="modal" data-target="#return-exchange-items_v1" class="return-exchange-items_v1"> -->
																				<button type="button" id="initiateReturn"
																					class="btn <c:if test="${not hasMobileNo}">no-mobile</c:if>"
																					index="${consignments.code}${entry.entryNumber}">
																					Return or Exchange</button>
																				</a>
																			</div>
																			<input type="hidden"
																				id="${consignments.code}${entry.entryNumber}orderCodeVal"
																				class="orderCodeVal" value="${orderData.code}" />
																			<input type="hidden"
																				id="${consignments.code}${entry.entryNumber}entryNumberVal"
																				class="entryNumberVal" value="${entry.entryNumber}" />
																			<c:set var="count" value="${count +1}" />
																		</c:if>
																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (hasReturnExchangePrivilege) && !(consignmententry.returnEligible) && ((consignmententry.reason) ne null)}">
																			<div class="btn-block">
																				<div class="infoTooltip">
																					<span><img
																						src="/_ui/responsive/common/assets/images/infoIcon.png"
																						title="" alt="" /></span>
																					<div class="arrow_box">${consignmententry.reason}</div>
																				</div>
																				<button type="button" class="btn"
																					index="${consignments.code}${entry.entryNumber}">
																					Return or Exchange</button>
																				<input type="hidden" id="exchangeBaseUrlId"
																					class="exchangeBaseUrlClass"
																					value="${consignmententry.reason}"></input> <input
																					type="hidden"
																					id="${consignments.code}${entry.entryNumber}orderCodeVal"
																					class="orderCodeVal" value="${orderData.code}" /> <input
																					type="hidden"
																					id="${consignments.code}${entry.entryNumber}entryNumberVal"
																					class="entryNumberVal" value="${entry.entryNumber}" />
																				<c:set var="count" value="${count +1}" />
																			</div>
																		</c:if>
																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (hasReturnExchangePrivilege) && (consignmententry.returnEligible) && (consignmententry.consignmentStatus eq 'Picked')}">
																			<div class="btn-block">
																				<spring:theme
																					code="text.myShoppers.pickuporder.returnExchange" />
																			</div>
																		</c:if>


																	</div>
																</div>
																<div class="clearfix text-danger outOfStockError"
																	id="${consignments.code}-${entry.entryNumber}-${uniqueId}"
																	style="display: none;">Some products are out of
																	stock. Please reduce quantity and make your exchange
																	selections</div> <%-- <c:if
                                                                           test="${orderData.status eq 'COMPLETED' and (not orderEntryStatus) && (not consignmentStatus)}">
                                                                           <a class="cancel-btn-macc" href="javascript:void(0)"
                                                                               data-index="${index}">ReturnItem</a>
                                                                           <div class="order_return_item"
                                                                               id="order_return_item${index}">Please contact
                                                                               customer service for return.</div>
                                                                           <account:returnItem product="${product}" index="${index }"
                                                                               cancelUrl="${cancelUrl}" />
                                                                       </c:if> --%>
																<div class="clearfix"></div> <c:if
																	test="${(consignmententry.status ne 'CANCELLED') && (consignmententry.consignmentStatus ne 'CANCELLED')}">
																	<order:consignmentTracking
																		orderDate="${orderData.created}"
																		consignment="${consignments}" />
																</c:if>
															</li>

														</c:if>


														<c:if
															test="${((consignmententry.status eq 'CANCELLED') || (consignmententry.isInternalConsignmentCancelled))}">

															<c:set value="${entry.product}" var="product" />
															<li>
																<div class="pro-img">
																	<product:productPrimaryImage product="${product}"
																		format="thumbnail" />
																</div>
																<div class="pro-info-shop">
																	<div class="mat-name">${product.brandCode}</div>
																	<div class="pro-name">
																		<a href="${product.url}">${product.name}</a>
																	</div>
																	<ul>
																		<c:set
																			value="${product.baseOptions[0].selected.variantOptionQualifiers[0]}"
																			var="productVariant1" />
																		<c:set
																			value="${product.baseOptions[0].selected.variantOptionQualifiers[1]}"
																			var="productVariant2" />

																		<c:choose>

																			<c:when
																				test="${(productVariant1.qualifier eq 'style') && (productVariant2.qualifier eq 'size')}">
																				<c:set var="styleVariant" value="${productVariant1}" />
																				<c:set var="sizeVariant" value="${productVariant2}" />
																			</c:when>

																			<c:when
																				test="${(productVariant1.qualifier eq 'size') && (productVariant2.qualifier eq 'style')}">
																				<c:set var="sizeVariant" value="${productVariant1}" />
																				<c:set var="styleVariant" value="${productVariant2}" />
																			</c:when>

																		</c:choose>


																		<li><span class="lbl-bag"><spring:theme
																					code="product.variants.colour"></spring:theme></span><span>
																				${styleVariant.value} </span></li>
																		<li><span class="lbl-bag"><spring:theme
																					code="product.variants.size"></spring:theme></span> <span>
																				${sizeVariant.value}</span></li>

																		<li><span class="lbl-bag"><spring:theme
																					code="product.volumePrices.column.qa"></spring:theme></span><span>
																				<c:choose>
																					<c:when
																						test="${consignmententry.isInternalConsignmentCancelled}">
                                                                                ${consignmententry.consignmentCancelledQuantity}
                                                                            </c:when>
																					<c:otherwise>
                                                                                ${consignmententry.allocatedQuantity}
                                                                            </c:otherwise>
																				</c:choose>
																		</span></li>
																	</ul>
																	<div
																		class="prod-price mobile-price hidden-md hidden-lg">
																		<format:fromPrice product="${product}" />
																	</div>
																	<div class="desktop-delivary-time  hidden-xs hidden-sm">

																		<span class="order-item-cancelled">CANCELLED</span>

																	</div>
																</div>
																<div
																	class="desktop-delivary-time mobile-delivary  hidden-md hidden-lg">

																	<span class="order-item-cancelled">CANCELLED</span>

																</div>
																<div class="return-track-action">
																	<div class="prod-price hidden-xs hidden-sm btn-block">
																		<format:orderEntryPrice product="${product}"
																			priceData="${entry.basePrice}" />
																	</div>

																	<div class="exchange_popup user-fdb-container">
																		<div class="btn-block"></div>
																		<c:if
																			test="${(loggedinUserId ne 'Anonymous') && (hasReturnExchangePrivilege)}">
																			<div class="btn-block">
																				<div class="infoTooltip">
																					<span><img
																						src="/_ui/responsive/common/assets/images/infoIcon.png"
																						title="" alt="" /></span>
																					<div class="arrow_box">The Item has been
																						cancelled. Hence Return or Exchange is
																						deactivated.</div>
																				</div>
																				<button type="button" class="btn"
																					index="${consignments.code}${entry.entryNumber}"
																					disabled>Return or Exchange</button>
																				<input type="hidden" id="exchangeBaseUrlId"
																					class="exchangeBaseUrlClass"
																					value="The Item has been cancelled. Hence Return or Exchange is deactivated."></input>
																			</div>
																			<input type="hidden"
																				id="${consignments.code}${entry.entryNumber}orderCodeVal"
																				class="orderCodeVal" value="${orderData.code}" />
																			<input type="hidden"
																				id="${consignments.code}${entry.entryNumber}entryNumberVal"
																				class="entryNumberVal" value="${entry.entryNumber}" />
																			<c:set var="count" value="${count +1}" />

																		</c:if>

																	</div>
																</div> <!-- 	TODO : Cancel Button Functionality --> <%-- <c:if test="${orderData.status eq 'WAIT_FOR_CANCEL'}">
										<a  href="${cancelUrl}?cancelItemCode=${entry.product.code}" >Cancel</a>
										</c:if> --%> <%-- <c:if
														test="${orderData.status eq 'COMPLETED' and (not orderEntryStatus) && (not consignmentStatus)}">
														<a class="cancel-btn-macc" href="javascript:void(0)"
															data-index="${index}">ReturnItem</a>
														<div class="order_return_item"
															id="order_return_item${index}">Please contact
															customer service for return.</div>
														<account:returnItem product="${product}" index="${index }"
															cancelUrl="${cancelUrl}" />
													</c:if> --%>
																<div class="clearfix"></div>
															</li>


														</c:if>


														<c:set var="index" value="${index+1}" />
													</c:if>


												</c:forEach>
											</c:if>
										</c:forEach>
										<c:forEach items="${orderData.unconsignedEntries}" var="entry">


											<c:set value="${entry.product}" var="product" />
											<c:set
												value="${entry.entryStatus eq 'CANCELLED' || entry.entryStatus eq 'CANCELING' || entry.entryStatus eq 'DEAD'}"
												var="orderEntryStatus" />
											<c:set
												value="${entry.entryStatus eq 'PARTIALLY_CANCELLED' || entry.entryStatus eq 'PARTIALLY_CANCELING'}"
												var="orderEntryPartialStatus" />
											<c:set
												value="${entry.cancelledQty  gt 0 && entry.cancelledQty lt entry.quantity}"
												var="orderEntryPartialQuantityStatus"></c:set>


											<c:if
												test="${!(orderEntryPartialStatus && orderEntryPartialQuantityStatus)}">

												<li>
													<div class="pro-img">
														<product:productPrimaryImage product="${product}"
															format="thumbnail" />
													</div>
													<div class="pro-info-shop">
														<div class="mat-name">${product.brandCode}</div>
														<div class="pro-name">
															<a href="${product.url}">${product.name}</a>
														</div>
														<ul>
															<c:set
																value="${product.baseOptions[0].selected.variantOptionQualifiers[0]}"
																var="productVariant1" />
															<c:set
																value="${product.baseOptions[0].selected.variantOptionQualifiers[1]}"
																var="productVariant2" />

															<c:choose>

																<c:when
																	test="${(productVariant1.qualifier eq 'style') && (productVariant2.qualifier eq 'size')}">
																	<c:set var="styleVariant" value="${productVariant1}" />
																	<c:set var="sizeVariant" value="${productVariant2}" />
																</c:when>

																<c:when
																	test="${(productVariant1.qualifier eq 'size') && (productVariant2.qualifier eq 'style')}">
																	<c:set var="sizeVariant" value="${productVariant1}" />
																	<c:set var="styleVariant" value="${productVariant2}" />
																</c:when>

															</c:choose>


															<li><span class="lbl-bag"><spring:theme
																		code="product.variants.colour"></spring:theme></span><span>
																	${styleVariant.value} </span></li>
															<li><span class="lbl-bag"><spring:theme
																		code="product.variants.size"></spring:theme></span> <span>
																	${sizeVariant.value}</span></li>

															<li><span class="lbl-bag"><spring:theme
																		code="product.volumePrices.column.qa"></spring:theme></span><span>
																	${entry.quantity}</span></li>
														</ul>
														<div class="prod-price mobile-price hidden-md hidden-lg"
															style="float: left">
															<format:fromPrice product="${product}" />
														</div>
														<div class="prod-price hidden-xs hidden-sm"
															style="float: left">
															<format:orderEntryPrice product="${product}"
																priceData="${entry.basePrice}" />
														</div>
														<div class="clearfix"></div>
													</div>
													<div class="clearfix"></div>
													<div class="desktop-delivary-time  hidden-xs hidden-sm">
														<c:choose>
															<c:when
																test="${(not orderEntryStatus) && (entry.quantity ne entry.cancelledQty)}">
																<div class="delivary-time">
																	<em> <order:orderEntryStatus
																			orderEntryStatus="${entry.entryStatus}" />.
																	</em> ${entry.product.shippingInfo}
																	<c:if
																		test="${not empty orderData.deliveryMode.description}">
                                                                        ${orderData.deliveryMode.description}
                                                                    </c:if>
																</div>
															</c:when>
															<c:otherwise>
																<span class="order-item-cancelled">CANCELLED</span>
															</c:otherwise>
														</c:choose>
													</div>
													<div
														class="desktop-delivary-time mobile-delivary  hidden-md hidden-lg">
														<c:choose>
															<c:when
																test="${(not orderEntryStatus) && (entry.quantity ne entry.cancelledQty)}">
																<c:if
																	test="${not (consignmententry.consignment.status eq 'DELIVERED' || consignmententry.consignment.status eq 'COMPLETED')}">
																	<div class="delivary-time">
																		<em> <order:orderEntryStatus
																				orderEntryStatus="${entry.entryStatus}" />.
																		</em> ${entry.product.shippingInfo}
																		<c:if
																			test="${not empty orderData.deliveryMode.description}">
                                                                            ${orderData.deliveryMode.description}
                                                                        </c:if>
																	</div>
																</c:if>
															</c:when>
															<c:otherwise>
																<span class="order-item-cancelled">CANCELLED</span>
															</c:otherwise>
														</c:choose>
													</div> <c:choose>
														<c:when
															test="${(not orderEntryStatus) && (entry.quantity ne entry.cancelledQty)}">
															<%-- <div class="prod-price hidden-xs hidden-sm">
                                                                 <format:orderEntryPrice product="${product}"
                                                                                         priceData="${entry.basePrice}"/>
                                                             </div>--%>
														</c:when>
														<c:otherwise>
															<div class="return-track-action">
																<%--<div class="prod-price hidden-xs hidden-sm btn-block">
                                                                        <format:orderEntryPrice product="${product}"
                                                                                                priceData="${entry.basePrice}"/>
                                                                    </div>--%>
																<div class="exchange_popup user-fdb-container">
																	<div class="btn-block"></div>

																	<c:if
																		test="${(loggedinUserId ne 'Anonymous') && (hasReturnExchangePrivilege) && (not isPickupOrder)}">
																		<div class="btn-block">


																			<div class="infoTooltip">
																				<span><img
																					src="/_ui/responsive/common/assets/images/infoIcon.png"
																					title="" alt="" /></span>
																				<div class="arrow_box">The Item has been
																					cancelled. Hence Return or Exchange is deactivated.
																				</div>
																			</div>
																			<button type="button" class="btn"
																				index="${consignments.code}${entry.entryNumber}"
																				disabled>Return or Exchange</button>
																			<input type="hidden" id="exchangeBaseUrlId"
																				class="exchangeBaseUrlClass"
																				value="The Item has been cancelled. Hence Return or Exchange is deactivated."></input>
																		</div>
																		<input type="hidden"
																			id="${consignments.code}${entry.entryNumber}orderCodeVal"
																			class="orderCodeVal" value="${orderData.code}" />
																		<input type="hidden"
																			id="${consignments.code}${entry.entryNumber}entryNumberVal"
																			class="entryNumberVal" value="${entry.entryNumber}" />
																		<c:set var="count" value="${count +1}" />

																	</c:if>

																</div>
															</div>
														</c:otherwise>
													</c:choose> <!-- 	TODO : Cancel Button Functionality --> <%-- <c:if test="${orderData.status eq 'WAIT_FOR_CANCEL'}">
										<a  href="${cancelUrl}?cancelItemCode=${entry.product.code}" >Cancel</a>
										</c:if> --%> <%-- <c:if
												test="${orderData.status eq 'COMPLETED' and (not orderEntryStatus)}">
												<a class="cancel-btn-macc" href="javascript:void(0)"
													data-index="${index}">ReturnItem</a>
												<div class="order_return_item"
													id="order_return_item${index}">Please contact
													customer service for return.</div>
												<account:returnItem product="${product}" index="${index}"
													cancelUrl="${cancelUrl}" />
											</c:if> --%>
													<div class="clearfix"></div> <c:if
														test="${(not orderEntryStatus) && (entry.quantity ne entry.cancelledQty)}">

														<c:choose>
															<c:when test="${not isPickupOrder}">
																<order:consignmentTracking
																	orderDate="${orderData.created}"
																	trackingStatus="confirm" />
															</c:when>
															<c:otherwise>
																<order:pickupOrderStatus
																	orderDate="${orderData.created}" orderData="${order}" />
															</c:otherwise>
														</c:choose>

													</c:if>
												</li>
											</c:if>


											<c:if
												test="${orderEntryPartialStatus && orderEntryPartialQuantityStatus}">
												<c:if test="${(entry.quantity-entry.cancelledQty) gt 0}">
													<li>
														<div class="pro-img">
															<product:productPrimaryImage product="${product}"
																format="thumbnail" />
														</div>
														<div class="pro-info-shop">
															<div class="mat-name">${product.brandCode}</div>
															<div class="pro-name">
																<a href="${product.url}">${product.name}</a>
															</div>
															<ul>
																<c:set
																	value="${product.baseOptions[0].selected.variantOptionQualifiers[0]}"
																	var="productVariant1" />
																<c:set
																	value="${product.baseOptions[0].selected.variantOptionQualifiers[1]}"
																	var="productVariant2" />

																<c:choose>

																	<c:when
																		test="${(productVariant1.qualifier eq 'style') && (productVariant2.qualifier eq 'size')}">
																		<c:set var="styleVariant" value="${productVariant1}" />
																		<c:set var="sizeVariant" value="${productVariant2}" />
																	</c:when>

																	<c:when
																		test="${(productVariant1.qualifier eq 'size') && (productVariant2.qualifier eq 'style')}">
																		<c:set var="sizeVariant" value="${productVariant1}" />
																		<c:set var="styleVariant" value="${productVariant2}" />
																	</c:when>

																</c:choose>


																<li><span class="lbl-bag"><spring:theme
																			code="product.variants.colour"></spring:theme></span><span>
																		${styleVariant.value} </span></li>
																<li><span class="lbl-bag"><spring:theme
																			code="product.variants.size"></spring:theme></span> <span>
																		${sizeVariant.value}</span></li>

																<li><span class="lbl-bag"><spring:theme
																			code="product.volumePrices.column.qa"></spring:theme></span><span>
																		${entry.quantity - entry.cancelledQty}</span></li>
															</ul>
															<div class="prod-price mobile-price hidden-md hidden-lg">
																<format:fromPrice product="${product}" />
															</div>
															<div class="desktop-delivary-time  hidden-xs hidden-sm">
																<c:choose>
																	<c:when test="${(not orderEntryStatus)}">
																		<div class="delivary-time">
																			<em> <order:orderEntryStatus
																					orderEntryStatus="${entry.entryStatus}" />.
																			</em> ${entry.product.shippingInfo}
																			<c:if
																				test="${not empty orderData.deliveryMode.description}">
                                                                                ${orderData.deliveryMode.description}
                                                                            </c:if>
																		</div>
																	</c:when>
																	<c:otherwise>
																		<span class="order-item-cancelled">CANCELLED</span>
																	</c:otherwise>
																</c:choose>
															</div>
														</div>
														<div
															class="desktop-delivary-time mobile-delivary  hidden-md hidden-lg">
															<c:choose>
																<c:when test="${(not orderEntryStatus)}">
																	<div class="delivary-time">
																		<em> <order:orderEntryStatus
																				orderEntryStatus="${entry.entryStatus}" />.
																		</em> ${entry.product.shippingInfo}
																		<c:if
																			test="${not empty orderData.deliveryMode.description}">
                                                                            ${orderData.deliveryMode.description}
                                                                        </c:if>
																	</div>
																</c:when>
																<c:otherwise>
																	<span class="order-item-cancelled">CANCELLED</span>
																</c:otherwise>
															</c:choose>
														</div>
														<div class="prod-price hidden-xs hidden-sm">
															<format:orderEntryPrice product="${product}"
																priceData="${entry.basePrice}" />
														</div> <!-- 	TODO : Cancel Button Functionality --> <%-- <c:if test="${orderData.status eq 'WAIT_FOR_CANCEL'}">
										<a  href="${cancelUrl}?cancelItemCode=${entry.product.code}" >Cancel</a>
										</c:if> --%> <%-- <c:if
												test="${orderData.status eq 'COMPLETED' and (not orderEntryStatus)}">
												<a class="cancel-btn-macc" href="javascript:void(0)"
													data-index="${index}">ReturnItem</a>
												<div class="order_return_item"
													id="order_return_item${index}">Please contact
													customer service for return.</div>
												<account:returnItem product="${product}" index="${index}"
													cancelUrl="${cancelUrl}" />
											</c:if> --%>
														<div class="clearfix"></div> <c:if
															test="${(not orderEntryStatus)}">
															<order:consignmentTracking
																orderDate="${orderData.created}"
																trackingStatus="confirm" />
														</c:if>
													</li>
												</c:if>
												<c:if test="${entry.cancelledQty gt 0}">

													<li>
														<div class="pro-img">
															<product:productPrimaryImage product="${product}"
																format="thumbnail" />
														</div>
														<div class="pro-info-shop">
															<div class="mat-name">${product.brandCode}</div>
															<div class="pro-name">
																<a href="${product.url}">${product.name}</a>
															</div>
															<ul>
																<c:set
																	value="${product.baseOptions[0].selected.variantOptionQualifiers[0]}"
																	var="productVariant1" />
																<c:set
																	value="${product.baseOptions[0].selected.variantOptionQualifiers[1]}"
																	var="productVariant2" />

																<c:choose>

																	<c:when
																		test="${(productVariant1.qualifier eq 'style') && (productVariant2.qualifier eq 'size')}">
																		<c:set var="styleVariant" value="${productVariant1}" />
																		<c:set var="sizeVariant" value="${productVariant2}" />
																	</c:when>

																	<c:when
																		test="${(productVariant1.qualifier eq 'size') && (productVariant2.qualifier eq 'style')}">
																		<c:set var="sizeVariant" value="${productVariant1}" />
																		<c:set var="styleVariant" value="${productVariant2}" />
																	</c:when>

																</c:choose>


																<li><span class="lbl-bag"><spring:theme
																			code="product.variants.colour"></spring:theme></span><span>
																		${styleVariant.value} </span></li>
																<li><span class="lbl-bag"><spring:theme
																			code="product.variants.size"></spring:theme></span> <span>
																		${sizeVariant.value}</span></li>

																<li><span class="lbl-bag"><spring:theme
																			code="product.volumePrices.column.qa"></spring:theme></span><span>
																		${entry.cancelledQty}</span></li>
															</ul>
															<div class="prod-price mobile-price hidden-md hidden-lg">
																<format:fromPrice product="${product}" />
															</div>
															<div class="desktop-delivary-time  hidden-xs hidden-sm">

																<span class="order-item-cancelled">CANCELLED</span>

															</div>
														</div>
														<div
															class="desktop-delivary-time mobile-delivary  hidden-md hidden-lg">

															<span class="order-item-cancelled">CANCELLED</span>

														</div>
														<div class="prod-price hidden-xs hidden-sm">
															<format:orderEntryPrice product="${product}"
																priceData="${entry.basePrice}" />
														</div> <!-- 	TODO : Cancel Button Functionality --> <%-- <c:if test="${orderData.status eq 'WAIT_FOR_CANCEL'}">
										<a  href="${cancelUrl}?cancelItemCode=${entry.product.code}" >Cancel</a>
										</c:if> --%> <%-- <c:if
												test="${orderData.status eq 'COMPLETED' and (not orderEntryStatus)}">
												<a class="cancel-btn-macc" href="javascript:void(0)"
													data-index="${index}">ReturnItem</a>
												<div class="order_return_item"
													id="order_return_item${index}">Please contact
													customer service for return.</div>
												<account:returnItem product="${product}" index="${index}"
													cancelUrl="${cancelUrl}" />
											</c:if> --%>
														<div class="clearfix"></div>
													</li>
												</c:if>

											</c:if>


											<c:set var="index" value="${index+1}" />
										</c:forEach>
									</ul>
								</div>


								<%-- <div class="clearfix feedback-section col-sm-12" id="orderDetailPickUp"
                                     style="display:none;">
                                    <h4>HOW WOULD YOU WANT TO SEND IT BACK</h4>

                                    <ul class="large-radio pickupOption">
                                        <li>
                                            <div class="acc-radio acc-radio-new">
                                                <input type="radio" id="radio1" checked name="same"
                                                       value="PickupRequired" class="optionsRadios">
                                                <label for="radio1"><span>Pickup</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="acc-radio acc-radio-new">
                                                <input type="radio" id="radio2" name="same" value="CustomerCourier"
                                                       class="optionsRadios">
                                                <label for="radio2"><span>I Will Courier</span></label>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="address PickupRequired">
                                        <p>The parcel will be picked up by our courier partner from the address it was
                                            delivered to.</p>
                                    </div>
                                    <div class="address CustomerCourier">
                                        <p>You can send the item along with the return label. <span class="btn-block">Return label will be send to you via E-mail.</span>
                                        </p>
                                    </div>

                                </div>


                                <input type="hidden" id="${orderData.refundOptions}" class="orderData_refundOptions"
                                       value="${refundOptions}"/>
                                <c:set var="NEFT" value="1"/>
                                <c:set var="Wallet" value="1"/>
                                <c:set var="Original" value="1"/>
                                <c:forEach items="${orderData.refundOptions}" var="refundOptions">
                                    <input type="hidden" id="${orderData.refundOptions}"
                                           class="1orderData_refundOptions" value="${refundOptions}"/>
                                    <c:if test="${refundOptions eq 'OriginalMode'}">
                                        <c:set var="Original" value="2"/>
                                        <input type="hidden" id="${orderData.refundOptions}"
                                               class="1orderData_refundOptions" value="${(Original)}"/>
                                    </c:if>
                                    <c:if test="${refundOptions eq 'BankTransfer'}">
                                        <c:set var="NEFT" value="2"/>
                                        <input type="hidden" id="${orderData.refundOptions}"
                                               class="2orderData_refundOptions" value="${(NEFT)}"/>
                                    </c:if>
                                    <c:if test="${refundOptions eq 'Wallet'}">
                                        <c:set var="Wallet" value="2"/>
                                        <input type="hidden" id="${orderData.refundOptions}"
                                               class="3orderData_refundOptions" value="${(Wallet)}"/>
                                    </c:if>
                                </c:forEach>


                                <div class="clearfix feedback-section collect-the-refund col-sm-12"
                                     id="orderDetailRefund" style="display:none;">
                                    <h4>HOW WOULD YOU WANT TO COLLECT THE REFUND</h4>
                                    <ul class="large-radio refundOption">
                                        <c:if test="${(Wallet eq 2)}">
                                            <li>
                                                <div class="acc-radio acc-radio-new">
                                                    <input type="radio" id="radio5" checked name="refund" value="Wallet"
                                                           class="optionsRadios">
                                                    <label for="radio5"><span>Shoppers Stop Credits</span></label>
                                                </div>
                                            </li>
                                        </c:if>
                                        <c:if test="${Original eq 2}">
                                            <li>
                                                <div class="acc-radio acc-radio-new">
                                                    <input type="radio" id="radio6" name="refund" value="OriginalMode"
                                                           class="optionsRadios">
                                                    <label for="radio6"><span>Via Original Payment Mode</span></label>
                                                </div>
                                            </li>
                                        </c:if>
                                        <c:if test="${NEFT eq 2}">
                                            <li>
                                                <div class="acc-radio acc-radio-new">
                                                    <input type="radio" id="radio7" name="refund" value="BankTransfer"
                                                           class="optionsRadios">
                                                    <label for="radio7"><span>NEFT (for COD Orders)</span></label>
                                                </div>
                                            </li>
                                        </c:if>
                                    </ul>
                                    <div class="address">
                                        <strong>Can't wait for a refund? Just transfer it to your Shopper Stop
                                            Credits.</strong>
                                    </div>

                                    <div class="row margT30 neft-form">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="accountHolder"
                                                       placeholder="Enter Account Holder Name">
                                                <div class="text-danger" id="accountHolderMessage"
                                                     style="display:none;">
                                                    Please enter a valid account holder name.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="accountNumber"
                                                       placeholder="Enter Account Number">
                                                <div class="text-danger" id="accountNumberMessage"
                                                     style="display:none;">
                                                    Please enter a valid bank account number.
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="bankName"
                                                       placeholder="Enter Bank Name">
                                                <div class="text-danger" id="bankNameMessage" style="display:none;">
                                                    Please enter a valid bank name.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="IFSCCode"
                                                       placeholder="IFSC CODE">
                                                <div class="text-danger" id="IFSCCodeMessage" style="display:none;">
                                                    Please enter a valid IFSC code.
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div> --%>


							</div>


							<%-- <div class="modal-footer  col-sm-12 return-submit" style="display:none;">
                                <div class="row">
                                    <input type="hidden" id="orderCodeVal" class="orderCodeVal"
                                           value="${orderData.code}"/>
                                    <div class="btn-block text-center" id="returnSubmit">
                                        <button class="bttn redBtn">Submit</button>
                                    </div>
                                    <div class="btn-block text-center" id="CancelReturnRequest">
                                        <button class="bttn grayBtn">Cancel</button>
                                    </div>
                                </div>
                            </div> --%>
						</div>


					</c:when>
					<c:otherwise>
						<br>
						<div class="text-center">
							<h4>
								<spring:theme code="text.myShoppers.no.orderdetails" />
							</h4>
							<br> <br>
							<c:choose>
								<c:when test="${isTrackOrder}">
									<form:form method="post" action="${trackUrl}"
										commandName="trackOrderForm">
										<form:errors path="email" cssClass="error-track" />
										<input id="emailAddress" type="hidden" name="email"
											value="${trackOrderForm.email}" />
										<form:errors path="orderCode" cssClass="error-track" />
										<input id="orderCode" name="orderCode" type="hidden"
											value="${trackOrderForm.orderCode}" />

										<input type="submit" value="RELOAD" class="sbt-button" />
									</form:form>
								</c:when>
								<c:otherwise>
									<a secure-login class="view-btn sbt-button order-reload-btn"
										href="${orderDetailsUrl}${orderCode}?tab=2"><spring:theme
											code="text.myShoppers.order.reload" /> </a>
								</c:otherwise>
							</c:choose>
						</div>
						<br>
					</c:otherwise>
				</c:choose>


				<c:if test="${(not isPickupOrder)}">
					<!-- 9col END // -->
					<div class="col-md-3 col-lg-3 my-order-aside">
						<h2>
							<spring:theme code="text.myShoppers.orders.manageOrder"></spring:theme>
						</h2>
						<c:url var="emailInvoice"
							value="/orders/emailInvoice/${orderData.code}/${orderData.user.uid}"></c:url>
						<div class="quick-menu">
							<ul>
								<li><a onclick="window.print();return false;"
									href="javascript:void(0);"><spring:theme
											code="text.myShoppers.orders.printOrder"></spring:theme></a></li>
								<%--SSLM-7893 start <li><form:form id="emailInvoice${orderData.code}"
                                               action="${emailInvoice}" method="GET"
                                               commandName="emailInvoice${orderData.code}" class="sendInvoice">
                                    <a href=""><spring:theme
                                            code="text.myShoppers.orders.emailInvoice"></spring:theme></a>
                                </form:form></li> SSLM-7893 end --%>
								<li><a href="/contactUs"><spring:theme
											code="text.myShoppers.orders.contactUs"></spring:theme></a></li>
								<li><a href="/faq"><spring:theme
											code="text.myShoppers.orders.faq"></spring:theme></a></li>
							</ul>
						</div>
						<%-- <div class="silver-inn-style">
                                <ul>
                                    <cms:pageSlot position="SilverShopper" var="feature">
                                        <cms:component component="${feature}" />
                                    </cms:pageSlot>

                                </ul>

                            </div> --%>

						<div class="next-offer-box">
							<cms:pageSlot position="CouponSlot" var="feature">
								<cms:component component="${feature}" />
							</cms:pageSlot>
						</div>
					</div>
				</c:if>
			</div>
		</div>
		</div>
		</div>
		<cms:pageSlot position="LeftPromoBanner" var="feature">
			<cms:component component="${feature}" />
		</cms:pageSlot>

		<c:if test="${not empty recommededProdutsForOrder}">
			<div class="container container-responsive">
				<div class="row">
					<div class="col-md-12 col-lg-12 related-order">
						<h2>
							<spring:theme code="text.myShoppers.orders.related"></spring:theme>
						</h2>
						<div class="full-page-product-slider">
							<div class="product-wpr">
								<ul class="product-grid">
									<c:forEach items="${recommededProdutsForOrder}"
										var="recommendedProduct">
										<c:set value="${recommendedProduct.target}" var="product" />
										<c:url value="${product.url}" var="productUrl" />
										<li class="pro-box deal-of">
											<div class="pro-img">
												<product:productPrimaryImage
													product="${recommendedProduct.target}" />
											</div>
											<div class="pro-info">
												<div class="mat-name">${product.brandCode}</div>
												<div class="pro-name">${product.name}</div>
												<div class="price-off">
													<format:fromPrice product="${product}" />
												</div>

											</div>
										</li>
									</c:forEach>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</c:if>
	</section>
	<c:choose>
		<c:when test="${not empty existingFeedbackForUserAndScope}">
			<c:set var="isFeedbackExist" value="true" />
			<c:set var="starRating"
				value="${existingFeedbackForUserAndScope.get(0).feedbackRating}" />
		</c:when>
		<c:otherwise>
			<c:set var="isFeedbackExist" value="false" />
			<c:set var="starRating" value="" />
		</c:otherwise>
	</c:choose>
	<c:if test="${not empty feedbackAndRatingData}">
		<div class="csat-feedback-box" style="display: none">
			<div class="cnfbox">
				<span class="close">x</span>
				<div class="heading">FEEDBACK</div>
				<div class="msg">
					<div class="member-exp">
						<div>
							<h3>
								<span>How was your experience?</span>
							</h3>
							<div class="rated"></div>
							<div class="csat-star-rating star-rating">
								<input class="rb1" id="P_Ans_1" name="numericRating"
									type="radio" value="1"> <input class="rb2" id="P_Ans_2"
									name="numericRating" type="radio" value="2"> <input
									class="rb3" id="P_Ans_3" name="numericRating" type="radio"
									value="3"> <input class="rb4" id="P_Ans_4"
									name="numericRating" type="radio" value="4"> <input
									class="rb5" id="P_Ans_5" name="numericRating" type="radio"
									value="5"> <label for="P_Ans_1" class="star rb1l"
									onclick="ratedMood(1);"></label> <label for="P_Ans_2"
									class="star rb2l" onclick="ratedMood(2);"></label> <label
									for="P_Ans_3" class="star rb3l" onclick="ratedMood(3);"></label>
								<label for="P_Ans_4" class="star rb4l" onclick="ratedMood(4);"></label>
								<label for="P_Ans_5" class="star rb5l" onclick="ratedMood(5);"></label>
								<label for="P_Ans_1" class="rb">1</label> <label for="P_Ans_2"
									class="rb">2</label> <label for="P_Ans_3" class="rb">3</label>
								<label for="P_Ans_4" class="rb">4</label> <label for="P_Ans_5"
									class="rb">5</label>
								<div class="rating"></div>
								<div class="rating-bg"></div>
								<input type="hidden" id="star_results" name="rating" value="0">
							</div>
						</div>
					</div>
				</div>
				<div class="member-fdb-container" style="display: block">
					<span class="fdb-msg" data-id="fdb-msg"></span>

					<c:forEach items="${feedbackAndRatingData}" var="data"
						varStatus="count">
						<form class="" id="ratingForm${count.index}"
							action="/customerFeedback/save" method="post"
							style="display: none">
							<ul class="clearfix">
								<c:forEach items="${data.feedbackReasons}" varStatus="theCount"
									var="reason">
									<li class="fdb-option"><input
										id="pquality${count.count}${theCount.count}" type="checkbox"
										name="feedbackReasons" value="${reason}"
										onclick="showHideFeedbackButton('#ratingForm${count.index}');">
										<label for="pquality${count.count}${theCount.count}">${reason}</label>
									</li>
								</c:forEach>
							</ul>
							<input type="hidden" name="feedbackRating"
								value="${data.feedbackRating}" /> <input type="hidden"
								name="feedbackChannel" value="${data.feedbackChannel}" /> <input
								type="hidden" name="feedbackScope" value="${data.feedbackScope}" />
							<input type="hidden" name="orderCode" value="${orderCode}" />

						</form>
					</c:forEach>
					<div class="txtArea clearfix" id="txtArea">
						<input type="hidden" id="feedbackProductCode" name="productCode"
							value="" /> <input type="hidden" id="feedbackConsignmentCode"
							name="consignmentCode" value="" />
						<textarea name="comments" id="comments" rows="8" cols="80"
							onkeyup="countCommentLength();" maxlength="300"
							placeholder="Type in your comments here..."></textarea>
						<span class="textarea_message">0/300</span>

					</div>

				</div>
				<div class="btn-container">
					<a href="#" class="btn-yes" onclick="submitFeedbackForm();">Submit
						& Close</a> <a href="#" class="skipClose">Skip &amp; Close</a>
				</div>
			</div>
		</div>
	</c:if>
</template:page>
